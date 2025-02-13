import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import certificate from "../../assets/certificate.png";
import graph from "../../assets/graph.png";
import heatmap from "../../assets/heatmap.png";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={certificate} className="max-w-30 my-2" alt="" />
              <h3 className="text-xl font-bold mb-2">Meta Hacker Cup</h3>
              <p className="text-gray-400 mb-4">
                Secured 3532 place at Meta Hacker Cup 2023 Round 2.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/882821623449277"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  View Certificate
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={graph} className="max-w-30 my-2" alt="" />
              <h3 className="text-xl font-bold mb-2">
                {" "}
                2 ⭐ Coder on Codechef with max rating of 1413.
              </h3>
              <p className="text-gray-400 mb-4">
                CodeChef is an online platform for learning, practicing, and
                competing in coding. It offers courses, practice problems, and
                coding contests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://www.codechef.com/users/recb_0219"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  Codechef_id
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={heatmap} className="max-w-30 my-2" alt="" />
              <h3 className="text-xl font-bold mb-2">
                Solved 1000+ DSA questions.
              </h3>
              <p className="text-gray-400 mb-4">
                Solved 1000+ questions on Leetcode, Codechef,
                Codeforces,GeeksForGeeks etc.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://leetcode.com/u/1-Ujjwal/"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  Leetcode_id
                </a>
                <a
                  href="https://www.codechef.com/users/recb_0219"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  Codechef_id
                </a>
                <a
                  href="https://codeforces.com/profile/Ujjwal_2002"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  Codeforces_id
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/kingayuqdh8/"
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                >
                  GeeksForGeeks_id
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Achievements;
