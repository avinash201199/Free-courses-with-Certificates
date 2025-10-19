import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function About() {
  const { theme } = useTheme();
  
  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-gray-900' : 'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700'}`}>
      {/* Animated Background Blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute rounded-full -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-fuchsia-400/30 to-pink-400/30 blur-3xl animate-pulse"></div>
        <div className="absolute rounded-full -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-blue-400/20 to-cyan-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute rounded-full top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-300/10 to-orange-300/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center sm:mb-20">
            <div className="inline-block px-4 py-2 mb-6 border rounded-full bg-white/10 backdrop-blur-md border-white/20">
              <span className="text-sm font-semibold tracking-widest uppercase text-white/80">Welcome to our community</span>
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-fuchsia-300">Us</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed sm:text-xl text-white/90">
              Empowering learners worldwide with free, high-quality education and recognized certificates
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 rounded-full bg-fuchsia-300 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>

          {/* Main Content Cards - Enhanced Layout */}
          <div className="mb-16 space-y-6">
            {/* Welcome Card */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-yellow-400/0 via-pink-400/0 to-fuchsia-400/0 group-hover:from-yellow-400/10 group-hover:via-pink-400/10 group-hover:to-fuchsia-400/10"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 p-4 shadow-lg rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Welcome!</h2>
                  <p className="text-lg leading-relaxed text-white/95">
                    This initiative was started by{" "}
                    <a
                      className="inline-block font-bold text-transparent transition-all duration-300 bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 hover:from-yellow-200 hover:via-red-200 hover:to-pink-200 hover:scale-110"
                      href="https://github.com/avinash201199"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Avinash Singh
                    </a>{" "}
                    with invaluable contributions from the GitHub{" "}
                    <a
                      className="inline-block font-semibold text-green-300 underline transition-all duration-300 hover:text-green-200 decoration-2 underline-offset-4 hover:scale-105"
                      href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      community
                    </a>{" "}
                    <span className="inline-block text-2xl text-red-400 animate-pulse">♥</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 p-4 shadow-lg rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-white/95">
                    Our mission is to provide <span className="font-bold text-yellow-300">free courses with certificates</span> to help learners worldwide enhance their skills and knowledge. We believe in the power of open-source projects to make education accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Open Source Card */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-fuchsia-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-fuchsia-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 p-4 shadow-lg rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Open Source</h2>
                  <p className="text-lg leading-relaxed text-white/95">
                    This repository is open-source and available{" "}
                    <a
                      className="inline-block font-bold text-yellow-300 underline transition-all duration-300 hover:text-yellow-200 decoration-2 underline-offset-4 hover:scale-105"
                      href="https://github.com/avinash201199/Free-courses-with-Certificates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    . Feel free to explore, contribute, and join us in our mission to make education accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group relative bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-fuchsia-300/40 hover:border-fuchsia-300/70 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-fuchsia-400/0 to-pink-400/0 group-hover:from-fuchsia-400/15 group-hover:to-pink-400/15"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 p-4 shadow-lg rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-400">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
                  <p className="text-lg leading-relaxed text-white/95">
                    If you have any questions or suggestions, please don't hesitate to reach out to{" "}
                    <a
                      href="https://www.linkedin.com/in/avinash-singh-071b79175/"
                      className="inline-block font-bold underline transition-all duration-300 text-fuchsia-300 hover:text-fuchsia-200 decoration-2 underline-offset-4 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      me
                    </a>
                    . Together, we can make a difference!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Enhanced Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform border group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border-white/20 hover:border-white/40 hover:scale-110 hover:shadow-2xl">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-b from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/15 group-hover:to-orange-400/15"></div>
              <div className="relative z-10">
                <div className="mb-4 text-5xl sm:text-6xl">🎓</div>
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Free Education</h3>
                <p className="text-sm font-medium text-white/80 sm:text-base">Accessible to All</p>
              </div>
            </div>

            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform border group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border-white/20 hover:border-white/40 hover:scale-110 hover:shadow-2xl">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-b from-green-400/0 to-emerald-400/0 group-hover:from-green-400/15 group-hover:to-emerald-400/15"></div>
              <div className="relative z-10">
                <div className="mb-4 text-5xl sm:text-6xl">🌍</div>
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Global Community</h3>
                <p className="text-sm font-medium text-white/80 sm:text-base">Learn Together</p>
              </div>
            </div>

            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform border group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border-white/20 hover:border-white/40 hover:scale-110 hover:shadow-2xl">
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-b from-fuchsia-400/0 to-pink-400/0 group-hover:from-fuchsia-400/15 group-hover:to-pink-400/15"></div>
              <div className="relative z-10">
                <div className="mb-4 text-5xl sm:text-6xl">📜</div>
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Certificates</h3>
                <p className="text-sm font-medium text-white/80 sm:text-base">Prove Your Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default About;