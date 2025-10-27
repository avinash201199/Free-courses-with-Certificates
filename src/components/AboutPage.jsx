import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useOutletContext } from "react-router-dom";

function About() {
  const { theme } = useTheme();
  const { sidebarCollapsed } = useOutletContext() || {};

  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden overflow-y-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-slate-900 via-slate-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100"
      }`}
      style={{
        paddingLeft:
          typeof window !== "undefined" && window.innerWidth >= 1024
            ? sidebarCollapsed
              ? 70
              : 220
            : undefined,
        transition: "padding-left 0.3s",
      }}
    >
      {/* Background Blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
      >
        <div
          className={`absolute rounded-full -top-32 -right-32 w-96 h-96 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-fuchsia-400/30 to-pink-400/30"
              : "bg-gradient-to-br from-fuchsia-200/30 to-pink-200/30"
          }`}
        />
        <div
          className={`absolute rounded-full -bottom-32 -left-32 w-96 h-96 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-blue-300/20 via-blue-400/20 to-cyan-400/20"
              : "bg-gradient-to-br from-blue-200/30 via-blue-300/30 to-cyan-300/30"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute rounded-full top-1/2 right-1/4 w-80 h-80 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-yellow-300/10 to-orange-300/10"
              : "bg-gradient-to-br from-yellow-200/20 to-orange-200/20"
          }`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-20">
            <div
              className={`inline-block px-4 py-2 mb-6 border rounded-full backdrop-blur-md ${
                isDark
                  ? "bg-white/10 border-white/20 text-white/80"
                  : "bg-gray-100 border-gray-300 text-gray-700"
              }`}
            >
              <span className="text-sm font-semibold tracking-widest uppercase">
                Welcome to our community
              </span>
            </div>

            <h1
              className={`mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl ${
                isDark
                  ? "text-white drop-shadow-lg"
                  : "text-gray-900 drop-shadow-sm"
              }`}
            >
              About{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark
                    ? "from-yellow-300 via-pink-300 to-fuchsia-300"
                    : "from-yellow-500 via-pink-400 to-fuchsia-400"
                }`}
              >
                Us
              </span>
            </h1>

            <p
              className={`max-w-2xl mx-auto mb-8 text-lg leading-relaxed sm:text-xl ${
                isDark ? "text-white/90" : "text-gray-700"
              }`}
            >
              Empowering learners worldwide with free, high-quality education
              and recognized certificates.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Welcome!",
                desc: (
                  <>
                    This initiative was started by{" "}
                    <a
                      className={`font-bold ${
                        isDark
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300"
                          : "text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-red-400 to-pink-400"
                      }`}
                      href="https://github.com/avinash201199"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Avinash Singh
                    </a>{" "}
                    with invaluable contributions from the GitHub{" "}
                    <a
                      className={`font-semibold underline ${
                        isDark
                          ? "text-green-300 hover:text-green-200"
                          : "text-green-600 hover:text-green-500"
                      }`}
                      href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      community
                    </a>{" "}
                    ❤️
                  </>
                ),
                iconColor: isDark
                  ? "from-yellow-400 to-orange-400"
                  : "from-yellow-300 to-orange-300",
              },
              {
                title: "Our Mission",
                desc: (
                  <>
                    Our mission is to provide{" "}
                    <span className="font-bold text-yellow-400">
                      free courses with certificates
                    </span>{" "}
                    to help learners enhance their skills and knowledge
                    globally.
                  </>
                ),
                iconColor: isDark
                  ? "from-blue-400 to-cyan-400"
                  : "from-blue-300 to-cyan-300",
              },
              {
                title: "Open Source",
                desc: (
                  <>
                    This repository is open-source and available{" "}
                    <a
                      className={`font-bold underline ${
                        isDark
                          ? "text-yellow-300 hover:text-yellow-200"
                          : "text-yellow-600 hover:text-yellow-500"
                      }`}
                      href="https://github.com/avinash201199/Free-courses-with-Certificates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    . Feel free to contribute!
                  </>
                ),
                iconColor: isDark
                  ? "from-fuchsia-400 to-purple-500"
                  : "from-fuchsia-300 to-purple-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`relative group rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl overflow-hidden backdrop-blur-xl ${
                  isDark
                    ? "bg-gradient-to-br from-white/15 to-white/5 border-white/20 hover:border-white/40"
                    : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`flex items-start gap-6 relative z-10 text-left ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 p-4 rounded-2xl shadow-lg bg-gradient-to-br ${card.iconColor}`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
                      {card.title}
                    </h2>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
