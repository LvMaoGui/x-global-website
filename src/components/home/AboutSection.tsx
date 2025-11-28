import React from "react";
import { Wallet, Settings, Database } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";

const features = [
  {
    icon: Wallet,
    title: "Online payments processing",
    description: "Efficient e-commerce payment solution",
  },
  {
    icon: Settings,
    title: "Merchant account support",
    description:
      "Transaction reconciliation, report generation, and transaction analysis",
  },
  {
    icon: Database,
    title: "Data storage",
    description: "Transaction breakdown and summary for each transaction",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Text Content Wrapper */}
        <div className="max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <ScrollAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-10 text-center">
              About Us
            </h2>
          </ScrollAnimation>
          
          {/* Lead Paragraph - Stronger Impact */}
          <ScrollAnimation delay={0.1}>
            <h3 className="text-xl md:text-2xl font-semibold text-primary leading-snug mb-8 max-w-2xl">
              XGLOBAL is a secure payment solution for both individuals and retailers, service providers, other payment services.
            </h3>
          </ScrollAnimation>
          
          {/* Supporting Text - Optimized for Readability */}
          <ScrollAnimation delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-secondary/90 leading-relaxed max-w-2xl">
              <p>
                We provide an advanced payment service, money transfers and currency exchange in all directions.
              </p>
              <p>
                Our technologies enable you to customize B2B/B2C payment acceptance from your customers as needed.
              </p>
              <p>
                We offer a wide range of payment methods for your online business, such as card payment solutions (debit or credit).
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" delay={0.3}>
          {features.map((feature, index) => (
            <StaggerItem
              key={index}
              className="group relative bg-muted p-8 rounded-2xl transition-all hover:shadow-md flex flex-col h-full"
            >
              {/* Icon Area */}
              <div className="mb-6 relative">
                 {/* Accent circle behind icon - using theme accent color */}
                 <div className="absolute -top-1 -left-1 w-4 h-4 bg-accent rounded-full z-0" />
                 <feature.icon 
                   className="w-8 h-8 text-primary relative z-10" 
                   strokeWidth={1.5}
                 />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4 pr-4">
                {feature.title}
              </h3>
              
              {/* Accent Separator Line */}
              <div className="w-full h-[1px] bg-accent/30 mb-4 group-hover:bg-accent transition-colors" />
              
              <p className="text-secondary text-base leading-relaxed">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
