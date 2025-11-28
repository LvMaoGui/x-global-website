import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-secondary mb-12">
              Ready to transform your financial operations? Get in touch with
              our team today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">
                    Email Us
                  </h4>
                  <p className="text-secondary">contact@xglobal.com</p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">
                    Call Us
                  </h4>
                  <p className="text-secondary">+1 (555) 000-0000</p>
                </div>
              </div> */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">
                    Visit Us
                  </h4>
                  <p className="text-secondary">
                    九龍觀塘成業街 7 號寧晉中心29 楼 A17 室
                    <br />
                    UNIT A17, 29/F., LEGEND TOWER, NO.7 SHING YIP STREET, KWUN
                    TONG, KOWLOON, HONG KONG
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100">
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
          </div>
        </div>
      </div>
    </section>
  );
};
