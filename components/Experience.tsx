import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="py-8">
      <h3 className="font-gilda text-4xl text-center mb-8">My Experience</h3>
      <div className="flex justify-center">
        <Tabs defaultValue="Work" className="w-full">
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
            <div className="flex gap-4">
              <Image
                src={'/img/LPPM.png'}
                alt="Logo Unand"
                width={150}
                height={150}
                className="object-contain rounded"
                priority
              />
              <div>
                <p className="text-xs text-neutral-400">Mar 2024 - Aug 2024</p>
                <p className="font-bold">LPPM Andalas University</p>
                <p className="text-xs text-neutral-400">
                  Web Developer - Freelance
                </p>
                <p className="font-semibold text-sm">
                  Web Design; Web Development; Wordpress + Elementor
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={'/img/BPSDM.jpg'}
                alt="Logo Unand"
                width={150}
                height={150}
                className="object-contain rounded"
                priority
              />
              <div>
                <p className="text-xs text-neutral-400">Jan 2023 - Feb 2023</p>
                <p className="font-bold">BPSDM Provinsi Sumatera Barat</p>
                <p className="text-xs text-neutral-400">
                  Web Developer - Intern
                </p>
                <p className="font-semibold text-sm">
                  System Design; System Development;
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Education" className="w-full mt-3 rounded-md p-4">
            <div className="flex items-center gap-4">
              <Image
                src={'/img/logo_Unand.png'}
                alt="Logo Unand"
                width={150}
                height={150}
                className="object-cover rounded"
                priority
              />
              <div>
                <p className="text-sm text-neutral-400">Aug 2020 - May 2025</p>
                <p className="font-bold">Andalas University</p>
                <p className="text-sm text-neutral-400">
                  Bachelor of Information Systems
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
