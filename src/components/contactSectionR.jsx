'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import Sent from "../assets/icons/sent"

const API_BASE_URL = 'http://192.168.1.22:8000'
let FullText = "";
const api = {
    streamResponse: async ({ role, content }, onChunk, onError, onComplete) => {
      try {
        const response = await fetch(`${API_BASE_URL}/generate/stream`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role, content }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
  
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            onComplete();
            break;
          }
  
          buffer += decoder.decode(value, { stream: true });
          const messages = buffer.split('\n\n');
          buffer = messages.pop() || '';
  
          for (const message of messages) {
            if (message.startsWith('data: ')) {
              try {
                const data = JSON.parse(message.slice(6));
                
                if (data.error) {
                  onError(new Error(data.error));
                  return;
                }
  
                onChunk(data);
  
                if (data.finished) {
                  onComplete();
                  return;
                }
              } catch (e) {
                console.error('Error parsing SSE message:', e);
              }
            }
          }
        }
      } catch (error) {
        onError(error);
      }
    }
  };



export default function ContactSection() {
  const [projectIdea, setProjectIdea] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  
  const projectTypes = [
    'Custom website for e-commerce...',
    'Modern redesign for tech companies...',
    'Unique AI-powered portfolio website...'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const handleStreamResponse = async (content) => {
    setIsLoading(true);
    let finalFullText = ''; // Store the final `full_text`
  
    try {
      await api.streamResponse(
        { role: 'user', content },
        (data) => {
          // Check if `data.full_text` exists and update it
          if (data.full_text) {
            finalFullText = data.full_text;
          }
        },
        (error) => {
          console.error("Stream error:", error);
          setIsLoading(false);
        },
        () => {
          console.log("Stream completed");
          if (finalFullText) {
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                text: finalFullText, // Display the final `full_text`
                sender: 'admin',
                isStreaming: false,
              },
            ]);
          }
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error("Error in streaming:", error);
      setIsLoading(false);
    }
  };
  
  
  
  
  const handleSendProjectIdea = async () => {
    if (projectIdea.trim()) {
      setMessages([{ id: 1, text: projectIdea, sender: 'user' }])
      setShowChat(true)
      await handleStreamResponse(projectIdea)
    }
  }

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading) {
      setMessages(prev => [...prev, { id: prev.length + 1, text: newMessage, sender: 'user' }])
      const messageToSend = newMessage
      setNewMessage('')
      await handleStreamResponse(messageToSend)
    }
  }

  if (showChat) {
    return (
      <div className="min-h-screen bg-black p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-lg overflow-hidden">
          <div className="bg-[#252525] p-4 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Project Discussion</h2>
            <button 
              onClick={() => setShowChat(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#252525] text-gray-200'
                  } ${message.isStreaming ? 'border-l-4 border-green-500' : ''}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[#252525] p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-[#252525] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className={`p-2 rounded-lg text-white transition-colors ${
                  isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black px-4 sm:p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 max-w-3xl leading-tight">
        <span className="bg-gradient-to-r from-[#FF7A33] to-[#FFFFFF] text-transparent bg-clip-text">
          CONTACT US FOR A
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          FREE CONSULTATION
        </span>
      </h1>
      
      <p className="text-gray-400 text-center mb-6 sm:mb-8 text-sm sm:text-base px-4">
        Generate a stunning website tailored to your needs.
      </p>

      <div className="relative w-full max-w-2xl mb-6 px-4 sm:px-0">
        <input
          type="text"
          value={projectIdea}
          onChange={(e) => setProjectIdea(e.target.value)}
          placeholder="Enter your project idea..."
          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#1a1a1a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button 
          onClick={handleSendProjectIdea}
          className="absolute right-6 sm:right-4 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
          <Sent />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl px-4 sm:px-0">
        {projectTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => {
              setProjectIdea(type)
              handleSendProjectIdea()
            }}
            className={`text-left px-3 sm:px-4 py-2 bg-[#1a1a1a] rounded-lg text-gray-300 hover:bg-[#252525] transition-colors flex items-center justify-between group text-xs sm:text-sm ${
              index === 2 ? 'col-span-1 sm:col-span-2 w-full sm:w-1/2 mx-auto' : ''
            }`}
          >
            <span>{type}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-500 group-hover:text-gray-300 transition-colors ml-2 sm:w-4 sm:h-4"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}