export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
  
            <p className="text-gray-400 mb-12">
              Whether you have a project in mind, a job opportunity, or just want
              to connect, feel free to reach out.
            </p>
  
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:your@email.com"
                    className="text-xl text-blue-400 hover:text-blue-300 transition"
                  >
                    nextphase.digital.team@gmail.com
                  </a>
                </div>
  
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-400 hover:text-blue-300 transition"
                  >
                    https://github.com/Lighterchu
                  </a>
                </div>
  
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Location
                  </p>
                  <p className="text-xl">
                    Melbourne, Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }