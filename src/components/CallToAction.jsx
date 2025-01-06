'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import Sent from "../assets/icons/sent"
import {ShowAvatar} from "./avatar";

const API_BASE_URL = 'https://grateful-shortly-tick.ngrok-free.app'
let LastIndex = null;
export const api = {
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
          
        //   const messages = buffer.split('\n\n');
        // console.log({messages});
        onChunk(buffer);

        // buffer = messages.pop() |  | '';
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
  const [isLoadingMsg , setisLoadingMsg] = useState(false);
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

  const handleStreamResponse = ({ role, content }, onChunk, onError = () => {}, onComplete) => {
    api.streamResponse(
      { role, content },
      (data) => {
        console.log("ris2:", data);
        onChunk(data);

        // if (data && data.text) {
        //   console.log("ris:", data, data.text);
        //   // Accumulate text chunks in a single variable
        // }
      },
      (error) => {
        console.error('Streaming error:', error);
        onError(error); // Call the onError callback if provided
      },
      () => {
        LastIndex = null;
        console.log(LastIndex , " :  LastIndex = null;")
        // Once the streaming is completed, call the onComplete callback
        onComplete();
      }
    );
  };
  
  const handleSendProjectIdea = async () => {
    if (projectIdea.trim()) {
      setisLoadingMsg(true);
      setMessages([{ id: 1, text: projectIdea, sender: 'user' }]);
      setShowChat(true);
  
      let fullMessage = ''; // Store the full message
  
      await handleStreamResponse(
        { role: 'user', content: projectIdea },
        (data) => {
          setisLoadingMsg(false);
            console.log("data fin : " , data)
          fullMessage = data; // Accumulate the full message
          if(!LastIndex){
            LastIndex = messages.length + 1;
            console.log({LastIndex  } , "kmv okvn")
            setMessages((prev) => [
                ...prev,
                { id: prev.length + 1, text: fullMessage, sender: 'assistant' }, // Update with full message
              ]);
          }else{
            console.log({LastIndex  } , "kmv 1")
            setMessages((prev) => [
                ...prev.slice(0, -1),
                { id: LastIndex , text: fullMessage, sender: 'assistant' }, // Update with full message
              ]);
          }
         
        },
        (error) => {
          console.error('Error during streaming', error);
        },
        () => {
        LastIndex = null;
          console.log('Streaming completed');
        }
      );
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: newMessage, sender: 'user' },
      ]);
      setisLoadingMsg(true);
      const messageToSend = newMessage;
      setNewMessage('');
  
      let fullMessage = ''; // Store the full message
  
      await handleStreamResponse(
        { role: 'user', content: messageToSend },
        (data) => {
          setisLoadingMsg(false);
            console.log("data fin : " , data)
            fullMessage = data; // Accumulate the full message
            if(!LastIndex){
              LastIndex = messages.length;
              console.log({LastIndex  } , "kmv okvn")
              setMessages((prev) => [
                  ...prev,
                  { id: prev.length + 1, text: fullMessage, sender: 'assistant' }, // Update with full message
                ]);
            }else{
              console.log({LastIndex  } , "kmv 1")
              setMessages((prev) => [
                  ...prev.slice(0, -1),
                  { id: LastIndex , text: fullMessage, sender: 'assistant' }, // Update with full message
                ]);
            }  
        },
        (error) => {
          console.error('Error during streaming', error);
        },
        () => {
            LastIndex = null;
          console.log('Streaming completed');
        }
      );
    }
  };

  const closeChat = () => {
    setShowChat(false);
  }

  if (showChat) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-lg text-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MWSML4vrVMASbwcXtBNuWIf19oYgmy.png"
                alt="Company Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Chat with Hex</h2>
          </div>
          <button
            onClick={closeChat}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Content */}
        <div className="h-[400px] p-4 space-y-4 overflow-y-auto custom-scrollbar">
          {messages && messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar */}
              {message.sender !== "user" && (
                <div className="h-[50px] w-[50px] rounded-full overflow-hidden flex-shrink-0 mr-3">
                  <ShowAvatar />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-[#FF6600] text-white"
                    : "bg-[#252525] text-gray-200"
                } ${message.isStreaming ? "border-l-4 border-green-500" : ""}`}
              >
                {message.text}
              </div>
            </div>
          ))}

           {/* Skeleton Loading */}
  {isLoadingMsg && (
    <div className="flex space-y-4 flex-col">
      {/* Skeleton for received message */}
      <div className="flex items-start space-x-3">
        {/* Skeleton Avatar */}
        <div className="h-[50px] w-[50px] rounded-full bg-gray-700 animate-pulse" />
        {/* Skeleton Message Bubble */}
        <div className="bg-gray-700 animate-pulse rounded-lg p-3 w-[60%] h-[20px]" />
      </div>
    </div>
  )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-zinc-800">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #27272a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }
      `}</style>
    </div>
    )
  }

  return (
    <div className="z-10 relative min-h-screen bg-transparent px-4 sm:p-8 flex flex-col items-center justify-center">
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