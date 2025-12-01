import React from "react";
import { Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* 标题部分居中 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-secondary">
            Ready to transform your financial operations? Get in touch with our
            team today.
          </p>
        </div>

        {/* 联系方式改为横向卡片布局 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="bg-gray-50 p-8 rounded-3xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Email Us</h4>
            <p className="text-secondary">olivia@xglobal.tech</p>
          </div>

          {/* Address Card */}
          <div className="bg-gray-50 p-8 rounded-3xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Visit Us</h4>
            <p className="text-secondary max-w-sm">
              九龍觀塘成業街 7 號寧晉中心29 楼 A17 室
              <br />
              UNIT A17, 29/F., LEGEND TOWER, NO.7 SHING YIP STREET, KWUN TONG,
              KOWLOON, HONG KONG
            </p>
          </div>

          {/* Phone section (Hidden) */}
          {/* <div className="bg-gray-50 p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Call Us</h4>
            <p className="text-secondary">+1 (555) 000-0000</p>
          </div> */}
        </div>

        {/* Original Form Section (Hidden) */}
        {/* <div className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100 mt-16 hidden">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all h-32 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div> */}
      </div>
    </section>
  );
};
