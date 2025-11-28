"use client";

import React, { useRef } from "react";
import { motion, useInView, type UseInViewOptions, type Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewport?: UseInViewOptions;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  viewport = { once: true, margin: "-100px" }, // Trigger when element is 100px into viewport
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getVariants = (): Variants => {
    const distance = 30;
    
    let hiddenX = 0;
    let hiddenY = 0;

    if (direction === "up") hiddenY = distance;
    if (direction === "down") hiddenY = -distance;
    if (direction === "left") hiddenX = distance;
    if (direction === "right") hiddenX = -distance;
    
    const variants: Variants = {
      hidden: { opacity: 0, x: hiddenX, y: hiddenY },
      visible: { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1] // Custom "easeOutQuart" like curve for premium feel
        }
      },
    };

    return variants;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component for Staggered Children (like grids or lists)
export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, margin: "-100px" },
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewport?: UseInViewOptions;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15, // Delay between each child
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

