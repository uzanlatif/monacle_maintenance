"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Zap, Users, Code, ShoppingBag } from "lucide-react"
import Link from "next/link"
import ParticleBackground from "@/components/particle-background"

export default function MaintenancePage() {
  const { scrollYProgress } = useScroll()
  const servicesRef = useRef<HTMLDivElement>(null)

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const services = [
    {
      title: "Digital Campaigns",
      description: "360° Digital Campaign Execution and Performance Marketing to drive measurable business outcomes.",
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
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16"
        style={{ opacity, scale }}
      >
        {/* Gradient Orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00BFFF]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9F7AEA]/10 blur-[100px]" />

        <div className="container relative mx-auto max-w-3xl text-center">
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#9F7AEA] p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                  <span className="text-xl font-bold">M</span>
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Monocle Agency</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Under{" "}
            <span className="bg-gradient-to-r from-[#00BFFF] to-[#9F7AEA] bg-clip-text text-transparent">
              Maintenance
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mb-10 text-xl text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're reimagining the digital space. A brand new Monocle Agency experience is launching soon.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative inline-block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-full bg-[#00BFFF] opacity-70 blur-md" />
            <div className="relative rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0080FF] p-[2px]">
              <div className="rounded-full bg-black px-8 py-3">
                <span className="text-white">Launching May 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              y: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <ArrowUpRight className="h-6 w-6 rotate-90" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
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

          {/* Service Cards - Flip Cards */}
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
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div
                        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 text-[#00BFFF]`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                      {/* <p className="text-white/60">Hover to learn more</p> */}
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-md">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-20 blur-lg`} />

                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
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

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#9F7AEA] p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                  <span className="text-sm font-bold">M</span>
                </div>
              </div>
              <span className="text-sm font-bold tracking-tight">Monocle Agency</span>
            </div>

            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} Monocle Agency. All rights reserved.
            </div>

            <Link
              href="mailto:hello@monocleagency.com"
              className="text-sm text-white/60 transition-colors hover:text-[#00BFFF]"
            >
              hello@monocleagency.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
