// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// export default function InteractiveMichaelSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const michaelRef = useRef<HTMLDivElement>(null);
//   const chatBubbleRef = useRef<HTMLDivElement>(null);
//   const deskRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const michael = michaelRef.current;
//     const chatBubble = chatBubbleRef.current;
//     const desk = deskRef.current;

//     // Set initial states
//     gsap.set(michael, { scale: 0.3, opacity: 0, y: 100 });
//     gsap.set(chatBubble, { scale: 0, opacity: 0 });
//     gsap.set(desk, { opacity: 0, x: 300 });

//     // Create timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top top',
//         end: '+=300%', // 3 viewport heights of scroll
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       }
//     });

//     // PHASE 1: Michael walks toward camera (0-1)
//     tl.to(michael, {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: 'power2.out',
//     }, 0);

//     // PHASE 2: Chat bubble appears (1-1.5)
//     tl.to(chatBubble, {
//       scale: 1,
//       opacity: 1,
//       duration: 0.3,
//       ease: 'back.out(2)',
//     }, 1);

//     // Chat bubble stays visible (1.5-2.5)
    
//     // Chat bubble disappears (2.5-2.8)
//     tl.to(chatBubble, {
//       scale: 0,
//       opacity: 0,
//       duration: 0.3,
//       ease: 'power2.in',
//     }, 2.5);

//     // PHASE 3: Desk appears, Michael walks to it (2.8-4)
//     tl.to(desk, {
//       opacity: 1,
//       x: 0,
//       duration: 0.5,
//     }, 2.8);

//     tl.to(michael, {
//       x: 200, // Move right toward desk
//       duration: 0.8,
//       ease: 'power1.inOut',
//     }, 2.8);

//     // Michael "sits" (scale down + move down)
//     tl.to(michael, {
//       y: 80,
//       scale: 0.85,
//       duration: 0.4,
//       ease: 'power2.out',
//     }, 3.6);

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative h-screen w-full overflow-hidden"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-blue rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
//       </div>

//       {/* Michael Character */}
//       <div 
//         ref={michaelRef}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 w-80 h-[500px] z-10"
//       >
//         <div className="relative w-full h-full">
//           <Image
//             src="/michael/michael.png"
//             alt="Michael Anderson"
//             fill
//             sizes="320px"
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>

//       {/* Chat Bubble */}
//       <div
//         ref={chatBubbleRef}
//         className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-white rounded-3xl p-6 shadow-2xl max-w-md z-20"
//       >
//         <p className="text-portfolio-black text-lg font-medium text-center">
//           Thanks for stopping by. <br />
//           Check out some of my apps! 👋
//         </p>
//         {/* Chat bubble tail */}
//         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
//       </div>

//       {/* Desk & Computer Setup */}
//       <div
//         ref={deskRef}
//         className="absolute bottom-0 right-24 w-[500px] h-[400px] z-5"
//       >
//         {/* Simple desk design */}
//         <div className="relative w-full h-full">
//           {/* Desk surface */}
//           <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-3xl shadow-2xl"></div>
          
//           {/* Monitor */}
//           <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-64 h-48 bg-gray-900 rounded-xl border-8 border-gray-800 shadow-2xl">
//             {/* Monitor screen */}
//             <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden">
//               <div className="text-white text-center p-4">
//                 <div className="text-4xl mb-2">💻</div>
//                 <div className="text-sm font-semibold">Portfolio OS</div>
//                 <div className="text-xs opacity-75 mt-1">Loading...</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Monitor stand */}
//           <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-20 h-8 bg-gray-800 rounded-t-lg"></div>
//           <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-full"></div>

//           {/* Chair */}
//           <div className="absolute bottom-0 left-16 w-24 h-32">
//             <div className="w-full h-20 bg-gray-700 rounded-t-full"></div>
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full"></div>
//           </div>

//           {/* Keyboard */}
//           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-16 bg-gray-800 rounded-lg shadow-lg"></div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm opacity-50 animate-bounce z-30">
//         Scroll to continue ↓
//       </div>
//     </div>
//   );
// }