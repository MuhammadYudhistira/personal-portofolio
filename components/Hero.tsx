import React from 'react';
import { GridPattern } from './magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#09090B] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <GridPattern
        width={1}
        height={1}
        x={-1}
        y={-1}
        className={cn('[mask-image:radial-gradient(circle,white,transparent)]')}
      />
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Muhammad Yudhistira
        </h1>
        <h3 className="text-xl md:text-3xl mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
          Web Developer
        </h3>
        <h3 className="text-xl md:text-3xl mt-4 font-normal text-neutral-300 max-w-lg">
          Based in Padang,{' '}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
            Indonesia
          </span>
        </h3>
      </div>
      <div className="absolute bottom-32 animate-bounce flex flex-col items-center justify-center gap-4">
        <svg className="size-10 text-[#0ABAB5]">
          <Mouse width={40} height={40} />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
