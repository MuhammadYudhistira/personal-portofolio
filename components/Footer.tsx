import React from 'react';
import { ShimmerButton } from './magicui/shimmer-button';
import { BoxReveal } from './magicui/box-reveal';

const Footer = () => {
  return (
    <footer className="py-24">
      <div className="flex flex-col justify-center items-center px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        <BoxReveal boxColor="#0ABAB5" duration={0.3}>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
            Let&apos;s Connect and Collaborate
          </h2>
        </BoxReveal>
        <BoxReveal boxColor="#0ABAB5" duration={0.3}>
          <p className="text-center mx-auto max-w-screen-sm mt-4  text-gray-500 dark:text-gray-400">
            If you have any questions or inquiries, feel free to reach out to me
            through the contact button or connect with me on social media.
          </p>
        </BoxReveal>

        <BoxReveal boxColor="#0ABAB5" duration={0.3}>
          <ShimmerButton className="shadow-2xl inline-block mt-8">
            <a
              href={`mailto:myudhistira07@gmail.com`}
              target="_blank"
              className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact Me
            </a>
          </ShimmerButton>
        </BoxReveal>
      </div>
    </footer>
  );
};

export default Footer;
