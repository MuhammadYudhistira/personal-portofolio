import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import TechStack from '@/components/TechStack';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Project />
      <Footer />
    </>
  );
};

export default page;
