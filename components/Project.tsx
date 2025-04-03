import Image from 'next/image';
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Globe } from 'lucide-react';

const Project = () => {
  return (
    <div className="py-24">
      <h3 className="font-gilda text-4xl text-center mb-12">My Projects</h3>
      <div className="grid grid-cols-1 gap-16">
        <div className="bg-white/5 backdrop-blur-none rounded-xl w-full pb-4 flex flex-col start items-start">
          <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-t-xl">
            <Image
              src={'/project/diaryapp.png'}
              alt="project"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h4 className="text-xl font-bold">Diary App</h4>
            <p className="text-sm font-light">
              An open-source diary application where users can write, manage,
              and interact with diary entries.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant={'secondary'}>NextJs</Badge>
              <Badge variant={'secondary'}>TypeScript</Badge>
              <Badge variant={'secondary'}>Supabase</Badge>
              <Badge variant={'secondary'}>Clerk</Badge>
              <Badge variant={'secondary'}>Tailwind CSS</Badge>
            </div>
            <div className="flex gap-2 mt-2">
              <Button size={'sm'}>
                <GitHubLogoIcon />
                <a
                  target="_blank"
                  href="https://github.com/MuhammadYudhistira/DiaryApp">
                  Github
                </a>
              </Button>
              <Button size={'sm'}>
                <Globe />
                <a target="_blank" href="https://diary.yudhistira.site">
                  Website
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-none rounded-xl w-full pb-4 flex flex-col start items-start">
          <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-t-xl">
            <Image
              src={'/project/maset.png'}
              alt="project"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h4 className="text-xl font-bold">
              Asset Management Information System
            </h4>
            <p className="text-sm font-light">
              web-based platform designed to help companies efficiently manage
              their assets from acquisition to disposal. It ensures transparent
              asset tracking and facilitates access to relevant information.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant={'secondary'}>NextJs</Badge>
              <Badge variant={'secondary'}>JavaScript</Badge>
              <Badge variant={'secondary'}>Express</Badge>
              <Badge variant={'secondary'}>Prisma</Badge>
              <Badge variant={'secondary'}>MySQL</Badge>
              <Badge variant={'secondary'}>React Query</Badge>
              <Badge variant={'secondary'}>Google Cloud</Badge>
              <Badge variant={'secondary'}>Tailwind CSS</Badge>
            </div>
            <div className="flex gap-2 mt-2">
              <Button size={'sm'}>
                <GitHubLogoIcon />
                <a
                  target="_blank"
                  href="https://github.com/MuhammadYudhistira/manajemen-aset">
                  Github
                </a>
              </Button>
              <Button size={'sm'}>
                <Globe />
                <a
                  target="_blank"
                  href="https://manajemen-aset.yudhistira.site">
                  Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
