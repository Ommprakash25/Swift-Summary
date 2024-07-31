import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h2 className="text-3xl">Swift Summary</h2>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient  '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Swift Summary, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;