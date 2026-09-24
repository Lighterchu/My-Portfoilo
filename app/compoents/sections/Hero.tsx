export default function Hero() {
  return (
    <section className="bg-black-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Ben Rowe
        </h1>

        <h2 className="text-lg md:text-2xl mb-8">
          Self Taught Web Developer
        </h2>
        <div>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          I build modern, responsive websites using React, Next.js and Tailwind
          CSS. I'm passionate about creating clean user experiences and turning
          ideas into real-world web applications.
        </p>
        <p className="text-gray-400 italic p-4">"I see code everywhere I look."</p>
        </div>
        

        <div className=" flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            View My Work
          </a>
          {/* <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Download My Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}
