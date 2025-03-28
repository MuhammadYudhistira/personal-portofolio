'use client';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { HomeIcon, MoonIcon } from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { DATA } from '@/data/Data';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mb-4 z-30">
      <TooltipProvider delayDuration={100}>
        <Dock direction="middle" className="rounded-full" iconDistance={160}>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <HomeIcon className="size-6" />
              </TooltipTrigger>
              <TooltipContent className="mb-2 bg-white text-black">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" />
          {DATA.navbar.map((item, index) => (
            <DockIcon key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <item.icon className="size-6" />
                </TooltipTrigger>
                <TooltipContent className="mb-2 bg-white text-black">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" />
          <DockIcon>
            <MoonIcon className="size-6" />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default Navbar;
