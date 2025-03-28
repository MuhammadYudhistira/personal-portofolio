import Navbar from '@/components/Navbar';
import { Spotlight } from '@/components/ui/spotlight-new';

const page = () => {
  return (
    <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Muhammad Yudhistira
        </h1>
        <h3 className="text-base md:text-3xl mt-4 font-normal text-neutral-300 max-w-lg text-center mx-auto">
          Web Developer
        </h3>
      </div>
    </div>
  );
};

export default page;
