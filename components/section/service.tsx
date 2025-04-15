"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Users, Code, ShoppingBag } from "lucide-react";

const services = [
  {
    title: "Digital Campaigns",
    description:
      "360° Digital Campaign Execution and Performance Marketing to drive measurable business outcomes.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-[#00BFFF] to-[#0080FF]",
  },
  {
    title: "Social Activation",
    description:
      "Comprehensive Social Media Management and KOL/Influencer Strategy to build authentic engagement and brand presence.",
    icon: <Users className="h-6 w-6" />,
    color: "from-[#00BFFF] to-[#9F7AEA]",
  },
  {
    title: "Tech & Development",
    description:
      "Tailored Website, App, and Platform Development to support your brand's digital infrastructure and scalability.",
    icon: <Code className="h-6 w-6" />,
    color: "from-[#9F7AEA] to-[#00BFFF]",
  },
  {
    title: "Live Commerce",
    description:
      "Real-time Sales Activation on Marketplaces and Sociocommerce Platforms (e.g., TikTok Shop, Shopee Live), designed to boost conversion through engaging live experiences.",
    icon: <ShoppingBag className="h-6 w-6" />,
    color: "from-[#0080FF] to-[#9F7AEA]",
  },
];

export function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={servicesRef} className="relative min-h-screen px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group h-[300px] perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full w-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div
                      className={`mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 text-[#00BFFF]`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-md">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-20 blur-lg`}
                  />
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-white/80">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-end text-sm text-[#00BFFF]">
                      <span>Coming soon</span>
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
