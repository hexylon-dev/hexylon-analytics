import React, { useRef, useMemo, useState , useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
let LastIndex = null;
const API_BASE_URL = 'http://192.168.1.22:6001'

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
function ParticleSystem({ isLoading, onTransitionComplete }) {
  const pointsRef = useRef(null);
  const targetPositions = useRef(null);
  const originalPositions = useRef(null);
  const animationProgress = useRef(0);
  const time = useRef(0);

  const particles = useMemo(() => {
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const hexagonPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.8 + Math.random() * 0.2;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      // Calculate hexagon positions
      const sideIndex = Math.floor(i / (particleCount / 6));
      const t = (i % (particleCount / 6)) / (particleCount / 6);
      const angle = (sideIndex / 6) * Math.PI * 2;
      const nextAngle = ((sideIndex + 1) / 6) * Math.PI * 2;
      const hexRadius = 1.5;

      hexagonPositions[i * 3] =
        THREE.MathUtils.lerp(Math.cos(angle), Math.cos(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 1] =
        THREE.MathUtils.lerp(Math.sin(angle), Math.sin(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 2] = 0;

      // Orange color palette
      // const colorT = Math.random();
      // colors[i * 3] = 0.8 + 0.2 * colorT;
      // colors[i * 3 + 1] = 0.3 + 0.3 * colorT;
      // colors[i * 3 + 2] = 0.0 + 0.2 * colorT;
      // 255,102,0
      colors[i * 3] = (17 / 255) * 0.7; // Red (darkened)
      colors[i * 3 + 1] = (24 / 255) * 0.7; // Green (darkened)
      colors[i * 3 + 2] = (39 / 255) * 0.7; // Blue (darkened)
      // rgb(17,24,39)
    }

    originalPositions.current = positions.slice();
    targetPositions.current = hexagonPositions;

    return { positions, colors, particleCount };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      time.current += 0.01;
      const positions = pointsRef.current.geometry.attributes.position.array;

      if (isLoading) {
        animationProgress.current += (1 - animationProgress.current) * 0.05;
      } else {
        animationProgress.current += (0 - animationProgress.current) * 0.05;
      }

      for (let i = 0; i < particles.particleCount; i++) {
        const idx = i * 3;
        const originalX = originalPositions.current[idx];
        const originalY = originalPositions.current[idx + 1];
        const originalZ = originalPositions.current[idx + 2];

        const targetX = targetPositions.current[idx];
        const targetY = targetPositions.current[idx + 1];
        const targetZ = targetPositions.current[idx + 2];

        positions[idx] = THREE.MathUtils.lerp(
          originalX,
          targetX,
          animationProgress.current
        );
        positions[idx + 1] = THREE.MathUtils.lerp(
          originalY,
          targetY,
          animationProgress.current
        );
        positions[idx + 2] = THREE.MathUtils.lerp(
          originalZ,
          targetZ,
          animationProgress.current
        );
      }

      pointsRef.current.rotation.z += 0.005;
      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      if (animationProgress.current > 0.99 && isLoading) {
        onTransitionComplete();
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function ShowAvatar() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleSystem isLoading={false} onTransitionComplete={() => {}} />
        </Canvas>
      </div>
    </>
  );
}


function ChatScreen({ closeChat }) {
  const [projectIdea, setProjectIdea] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null);
  const [isLoadingMsg , setisLoadingMsg] = useState(false);
  
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
              LastIndex = messages.length === 0 ?  1 : messages.length  ;
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

// function ChatScreen({ closeChat }) {
//   const messages = [];
//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-20 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-lg text-white shadow-xl">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-zinc-800">
//           <div className="flex items-center gap-3">
//             <div className="h-10 w-10 rounded-full overflow-hidden">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MWSML4vrVMASbwcXtBNuWIf19oYgmy.png"
//                 alt="Company Logo"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <h2 className="text-xl font-semibold">Chat with Hex</h2>
//           </div>
//           <button
//             onClick={closeChat}
//             className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M18 6L6 18M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Chat Content */}
//         <div className="h-[400px] p-4 space-y-4 overflow-y-auto custom-scrollbar">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex ${
//                 message.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               {/* Avatar */}
//               {message.sender !== "user" && (
//                 <div className="h-[50px] w-[50px] rounded-full overflow-hidden flex-shrink-0 mr-3">
//                   <ShowAvatar />
//                 </div>
//               )}

//               {/* Message Bubble */}
//               <div
//                 className={`max-w-[80%] rounded-lg p-3 ${
//                   message.sender === "user"
//                     ? "bg-blue-600 text-white"
//                     : "bg-[#252525] text-gray-200"
//                 } ${message.isStreaming ? "border-l-4 border-green-500" : ""}`}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input Area */}
//         <div className="p-4 border-t border-zinc-800">
//           "
//           <form className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
//             />
//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
//               </svg>
//             </button>
//           </form>
//         </div>
//       </div>

//       <style jsx global>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #27272a;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #3f3f46;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #52525b;
//         }
//       `}</style>
//     </div>
//   );
// }

export default function ParticleAvatar() {
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleTransitionComplete = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
    setIsLoading(false);
  };

  // Check for phone screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed (768px for phones)
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsScrolled(window.scrollY > 0); // Only set isScrolled on mobile
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <div
        className={`fixed w-[200px] h-[200px] z-10 transition-all duration-500 ${
          isMobile && isScrolled
            ? "top-0 left-1/2 transform -translate-x-1/2"
            : "bottom-0 right-0"
        }`}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={() => setIsLoading(true)}
        >
          {!showChat && (
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <ParticleSystem
                isLoading={isLoading}
                onTransitionComplete={handleTransitionComplete}
              />
            </Canvas>
          )}
        </div>
      </div>
      {showChat && (
        <div className="">
          <ChatScreen closeChat={closeChat} />
        </div>
      )}
    </>
  );
}


