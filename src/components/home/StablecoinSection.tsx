import React from "react";
import { Lock, TrendingUp, FileText, ShieldCheck } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";

const features = [
  {
    title: "100% Backed",
    description: "Every token is backed 1:1 by fiat currency and high-quality liquid assets.",
    icon: ShieldCheck,
  },
  {
    title: "Monthly Attestations",
    description: "Regular reports from top-tier accounting firms verifying our reserves.",
    icon: FileText,
  },
  {
    title: "Instant Settlement",
    description: "24/7/365 value transfer with near-zero settlement time.",
    icon: TrendingUp,
  },
  {
    title: "Institutional Grade",
    description: "Built for enterprise needs with advanced API integration.",
    icon: Lock,
  },
];

export const StablecoinSection = () => {
  return (
    <section id="stablecoin" className="py-24 lg:py-32 bg-[#0B1120] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <ScrollAnimation>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
                The Future of Money
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Digital Currency, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Stability First.
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Bridge the gap between traditional finance and the digital economy with our fully compliant, regulatory-first stablecoin infrastructure.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 gap-8" delay={0.2}>
              {features.map((item, idx) => (
                <StaggerItem key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Visual: Coin Representation */}
          <ScrollAnimation direction="left" delay={0.3}>
            <div className="relative flex items-center justify-center aspect-square max-w-[500px] mx-auto">
               {/* Outer Rings */}
               <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
               <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               
               {/* Center Coin */}
               <div className="relative w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)] border border-blue-400/30 z-10">
                  <span className="text-6xl lg:text-8xl font-bold text-white">X</span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none" />
               </div>

               {/* Floating Elements */}
               <div className="absolute top-10 right-10 bg-[#1e293b] p-3 rounded-xl border border-blue-500/30 shadow-xl animate-bounce duration-[4000ms]">
                  <div className="text-xs text-blue-400 font-mono">Reserves</div>
                  <div className="text-lg font-bold text-white">$1.00 USD</div>
               </div>
               
               <div className="absolute bottom-20 left-0 bg-[#1e293b] p-3 rounded-xl border border-purple-500/30 shadow-xl animate-bounce duration-[5000ms]">
                  <div className="text-xs text-purple-400 font-mono">Audited</div>
                  <div className="text-lg font-bold text-white">Monthly</div>
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
