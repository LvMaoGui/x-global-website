"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Next Generation FinTech
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
            Global Finance, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
              Reimagined.
            </span>
          </h1>
          
          <p className="text-xl text-secondary mb-8 max-w-lg leading-relaxed">
          Your online payment provider
          Quick and secure payments for both individuals and businesses
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              Start Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all hover:border-gray-300">
              Contact Sales
            </button>
          </div> */}

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-8 text-secondary/80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Bank-Grade Security
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Zap className="w-5 h-5 text-accent" />
              Instant Settlement
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Globe2 className="w-5 h-5 text-accent" />
              30+ Countries
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Abstract Card Stack Representation */}
            <div className="absolute inset-0 bg-linear-to-tr from-gray-100 to-gray-50 rounded-[40px] transform rotate-[-6deg] translate-y-4 border border-white shadow-xl" />
            <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col p-8 overflow-hidden">
                {/* Mock UI Elements */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col">
                        <span className="text-sm text-secondary">Total Balance</span>
                        <span className="text-4xl font-bold text-primary">$124,500.00</span>
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Globe2 className="w-6 h-6 text-accent"/>
                    </div>
                </div>
                
                {/* Graph Area */}
                <div className="flex-1 bg-gray-50 rounded-2xl mb-6 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-linear-to-tr from-accent/10 to-transparent" />
                    {/* Simple SVG Wave */}
                    <svg className="absolute bottom-0 left-0 right-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C150,50 350,150 500,80 L500,200 L0,200 Z" fill="url(#gradient)" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="absolute bottom-0 left-0 right-0 w-full h-full" preserveAspectRatio="none">
                         <path d="M0,100 C150,50 350,150 500,80" fill="none" stroke="#3B82F6" strokeWidth="3" />
                    </svg>
                </div>

                {/* List Items */}
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-lg font-bold text-primary">
                                    {i === 1 ? '🇺🇸' : '🇪🇺'}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-primary">
                                        {i === 1 ? 'Payment to US Partner' : 'Incoming from Europe'}
                                    </span>
                                    <span className="text-xs text-secondary">Today, 10:23 AM</span>
                                </div>
                            </div>
                            <span className={`font-semibold ${i === 1 ? 'text-primary' : 'text-green-500'}`}>
                                {i === 1 ? '- $4,200.00' : '+ €8,500.00'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold text-green-600">Transfer Complete</span>
                        <span className="text-sm font-bold text-primary">$4,200.00 Sent</span>
                    </div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

