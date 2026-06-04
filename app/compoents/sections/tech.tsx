export default function Tech() {
    const techStack = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Tailwind CSS",
      "Sanity",
      "Sentry",
    ];
  
    return (
      <section id="tech" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack
            </h2>
  
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build modern web applications.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }