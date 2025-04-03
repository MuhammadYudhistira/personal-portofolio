import React from 'react';
import { Mouse } from 'lucide-react';
import { Particles } from './magicui/particles';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#09090B] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center overflow-hidden py-24">
      {/* <GridPattern
        width={1}
        height={1}
        x={-1}
        y={-1}
        className={cn('[mask-image:radial-gradient(circle,white,transparent)]')}
      /> */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        ease={50}
        color={'#0ABAB5'}
        staticity={50}
        size={1}
        refresh
      />
      <div className="z-10 flex flex-col items-center text-center">
        <div>
          <h1 className="font-gilda text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            I&apos;m Muhammad Yudhistira
          </h1>
        </div>
        <h3 className="font-gilda text-xl md:text-5xl mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
          Junior Web Developer
        </h3>
        <h3 className="font-gilda text-xl md:text-5xl mt-4 font-normal text-neutral-300 max-w-lg">
          Based in{' '}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
            Indonesia
          </span>
        </h3>
        {/* <ShimmerButton className="shadow-2xl mt-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            <File />
          </span>
        </ShimmerButton> */}
      </div>
      <div className="absolute hidden bottom-32 animate-bounce md:flex flex-col items-center justify-center gap-4 opacity-50">
        <p className="font-bold text-[#0ABAB5] ">SCROLL</p>
        <svg className="size-10 text-[#0ABAB5]">
          <Mouse width={36} height={36} />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
