'use client';
import React from 'react';
import { Mouse } from 'lucide-react';
import { Particles } from './magicui/particles';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#09090B] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center overflow-hidden py-24">
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
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.1,
            default: { type: 'spring' },
            opacity: { ease: 'linear' },
          }}
          viewport={{ once: true }}>
          <h1 className="font-gilda text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            I&apos;m Muhammad Yudhistira
          </h1>
        </motion.div>
        <motion.h3
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.1,
            default: { type: 'spring' },
            opacity: { ease: 'linear' },
          }}
          viewport={{ once: true }}
          className="font-gilda text-3xl md:text-5xl mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
          Web Developer
        </motion.h3>
        <motion.h3
          className="font-gilda text-3xl md:text-5xl mt-4 font-normal text-neutral-300 max-w-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.1,
            default: { type: 'spring' },
            opacity: { ease: 'linear' },
          }}
          viewport={{ once: true }}>
          Based in{' '}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ABAB5] via-[#4EF5F1] to-[#c2fffd]">
            Indonesia
          </span>
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="absolute hidden bottom-32 animate-bounce duration-1000 md:flex flex-col items-center justify-center gap-4 opacity-50">
        {/* <p className="font-bold text-[#0ABAB5] ">SCROLL</p> */}
        <svg className="size-10 text-[#0ABAB5]">
          <Mouse width={36} height={36} />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
