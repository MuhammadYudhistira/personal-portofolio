'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';
import { motion } from 'motion/react';

const Experience = () => {
  return (
    <div className="py-24">
      <h3 className="font-gilda text-4xl text-center mb-8">My Experience</h3>
      <motion.div
        className="flex justify-center"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <Tabs defaultValue="Work" className="w-full h-[500px]">
          <TabsList className="w-full">
            <TabsTrigger value="Work" className="w-full">
              Work
            </TabsTrigger>
            <TabsTrigger value="Education" className="w-full">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="Work"
            className="w-full mt-3 border broder-white/20 rounded-md p-4 space-y-8">
            <div className="flex justify-start items-start gap-4">
              <div className="relative size-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36">
                <Image
                  src="/img/LPPM.png"
                  alt="Logo Unand"
                  fill
                  className="object-contain rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-neutral-400">
                  Mar 2024 - Aug 2024
                </p>
                <p className="font-bold text-xs sm:text-base">
                  LPPM Andalas University
                </p>
                <p className="text-[10px] sm:text-sm text-neutral-400">
                  Web Developer - Freelance
                </p>
                <p className="font-semibold text-[10px] sm:text-sm">
                  Web Design; Web Development; Wordpress + Elementor
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="relative size-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36">
                <Image
                  src="/img/BPSDM.jpg"
                  alt="Logo Unand"
                  fill
                  className="object-cover rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-neutral-400">
                  Jan 2023 - Feb 2023
                </p>
                <p className="text-xs sm:text-base font-bold">
                  BPSDM Provinsi Sumatera Barat
                </p>
                <p className="text-[10px] sm:text-sm text-neutral-400">
                  Web Developer - Intern
                </p>
                <p className="font-semibold text-[10px] sm:text-sm">
                  System Design; System Development;
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Education" className="w-full mt-3 rounded-md p-4">
            <div className="flex items-center gap-4">
              <div className="relative size-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36">
                <Image
                  src="/img/UNAND.png"
                  alt="Logo Unand"
                  fill
                  className="object-cover rounded"
                  priority
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-sm text-neutral-400">
                  Aug 2020 - May 2025
                </p>
                <p className="text-sm sm:text-base font-bold">
                  Andalas University
                </p>
                <p className="text-[10px] sm:text-sm text-neutral-400">
                  Bachelor of Information Systems
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Experience;
