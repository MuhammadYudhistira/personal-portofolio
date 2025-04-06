'use client';
import { DATA } from '@/data/Data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const TechStack = () => {
  return (
    <div className="py-24">
      <motion.h3
        className="font-gilda text-4xl text-center mb-8"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        My Current Tech Stack
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        {DATA.techStack.map((item) => (
          <div
            key={item.name}
            className="flex items-start justify-start gap-4 p-4 border border-white/20 rounded-md bg-[#262626] hover:bg-[#0ABAB5]/10 transition duration-200 ease-in-out">
            <div
              className="flex size-16 p-3 rounded-md"
              style={{ backgroundColor: item.bg }}>
              <Image
                src={item.icon}
                alt={item.name}
                className="object-contain"
                width={100}
                height={100}
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold mt-2">{item.name}</p>
              <p className="text-xs text-neutral-400">{item.description}</p>
            </div>
          </div>
        ))}
        <div></div>
      </motion.div>
    </div>
  );
};

export default TechStack;
