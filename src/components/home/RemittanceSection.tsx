import React from "react";
import { CheckCircle2, ArrowRight, RefreshCw, Shield, Globe } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";

const benefits = [
  {
    title: "Real-time Settlements",
    description: "Instant processing for major currency corridors worldwide.",
    icon: RefreshCw,
  },
  {
    title: "Bank-Grade Security",
    description: "Fully compliant with international regulations and encryption standards.",
    icon: Shield,
  },
  {
    title: "Global Coverage",
    description: "Send money to over 180+ countries with local payout options.",
    icon: Globe,
  },
];

export const RemittanceSection = () => {
  return (
    <section id="remittance" className="section-padding bg-muted/50 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div>
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-accent text-xs font-bold tracking-wide uppercase mb-6">
                Cross-Border Payments
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Seamless Global <br />
                <span className="text-accent">Money Movement</span>
              </h2>
              <p className="text-lg text-secondary mb-10 leading-relaxed">
                Experience the future of remittance. We bridge the gap between borders with infrastructure built for speed, transparency, and reliability.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="space-y-6 mb-10" delay={0.2}>
              {benefits.map((item, idx) => (
                <StaggerItem key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                    <p className="text-secondary/80 text-sm">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* <ScrollAnimation delay={0.4}>
              <button className="group flex items-center gap-2 text-accent font-bold hover:text-blue-700 transition-colors">
                Explore Coverage
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </ScrollAnimation> */}
          </div>

          {/* Right Column: Interactive UI Mockup */}
          <ScrollAnimation className="relative" delay={0.2} direction="left">
            {/* Decorative blurred blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Main Calculator Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-primary">Send Money</h3>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 focus-within:border-accent transition-colors">
                  <label className="text-xs font-semibold text-secondary uppercase block mb-1">You Send</label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">1,000.00</span>
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50">
                      <span className="text-lg">🇺🇸</span>
                      <span className="font-bold text-primary text-sm">USD</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-3 relative z-10">
                   <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center shadow-lg shadow-accent/20 border-4 border-white">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                   </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 focus-within:border-accent transition-colors">
                  <label className="text-xs font-semibold text-secondary uppercase block mb-1">Recipient Gets</label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">920.50</span>
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50">
                      <span className="text-lg">🇪🇺</span>
                      <span className="font-bold text-primary text-sm">EUR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Details */}
              <div className="mt-8 space-y-3 py-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Exchange Rate</span>
                  <span className="font-medium text-primary">1 USD = 0.9205 EUR</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Transfer Fee</span>
                  <span className="font-medium text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Arrival Time</span>
                  <span className="font-medium text-primary">~ 5 Minutes</span>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Confirm Transfer
              </button>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-[3000ms]">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-green-100 rounded-lg">
                   <CheckCircle2 className="w-5 h-5 text-green-600" />
                 </div>
                 <div>
                   <div className="text-xs text-secondary">Transaction Status</div>
                   <div className="text-sm font-bold text-green-600">Completed</div>
                 </div>
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
