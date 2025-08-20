import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { Link } from "react-router";
 


export default function BackgroundLinesDemo() {


  return (

    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Happy Birthday Poonam 🎉<br /> Wishing You Joy & Happiness ❤️
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        May your special day be filled with laughter, love, and unforgettable memories.
        Here’s to many more amazing years ahead 🌸
      </p>
      <Link to="/Chat.jsx" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <span>Click Here →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
      </Link>
    </BackgroundLines>
  );
}
