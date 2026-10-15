"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "Strategy", label: "Clear direction built around your goals" },
  { value: "Systems", label: "Web experiences that simplify your operations" },
  { value: "Support", label: "Practical guidance that keeps momentum steady" },
];

const pillars = [
  { title: "Strategy", text: "Clear positioning, smart priorities, and a roadmap built around real business goals." },
  { title: "Systems", text: "Web and automation experiences that reduce friction and help you scale." },
  { title: "Support", text: "Continuous optimization, guidance, and maintenance after launch." },
];

const chartBars = [28, 42, 58, 54, 74, 92];

export function AboutPreview() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden border-y border-outline-variant bg-surface-container-low px-gutter py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(35, 92, 57, 0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(35, 92, 57, 0.12), transparent 28%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(208,219,211,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(208,219,211,0.18)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >

          <p className="text-[11px] uppercase tracking-[0.22em] text-on-surface-variant md:text-[12px]">
            Strategic digital growth partner
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-container">
                Built for momentum
              </p>

              <h2 className="max-w-[15ch] text-[clamp(2.1rem,3vw,3.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-primary">
                Digital systems built for steady business growth.
              </h2>
            </div>

            <p className="max-w-xl text-[0.98rem] leading-7 text-on-surface-variant md:text-[1.04rem]">
              Make4U Digital Solutions helps businesses turn ideas into clearer online experiences and practical systems that support day-to-day growth.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-[0.96rem] font-semibold text-on-primary-fixed shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
              >
                Learn more
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-container px-5 py-3 text-[0.96rem] font-semibold text-primary transition-all duration-200 hover:border-primary-container hover:text-primary-container"
              >
                Book a consultation
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.4rem] border border-outline-variant bg-surface-container p-4 shadow-[0_14px_30px_rgba(18,29,22,0.04)]"
                >
                  <div className="text-[1.5rem] font-black leading-none tracking-[-0.05em] text-primary">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-[0.74rem] leading-relaxed text-on-surface-variant">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-5 rounded-[2.25rem] bg-primary-container/10 blur-3xl"
              animate={{ opacity: [0.6, 0.9, 0.7], scale: [1, 1.04, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <motion.div
              whileHover={{ y: -4, scale: 0.995 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative mx-auto max-w-[440px] overflow-hidden rounded-[1.55rem] border border-outline-variant bg-surface-container shadow-[0_20px_50px_rgba(17,24,19,0.1)]"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/70 bg-surface-container-low px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.25 w-2.25 rounded-full bg-[#ff6b6b]" />
                    <span className="h-2.25 w-2.25 rounded-full bg-[#f6c453]" />
                    <span className="h-2.25 w-2.25 rounded-full bg-[#45c979]" />
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    Growth OS
                  </span>
                </div>

                <span className="rounded-full border border-primary-container/35 bg-primary-container/10 px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-primary-container">
                  Live
                </span>
              </div>

              <div className="space-y-4 p-4">
                <div className="rounded-[1.1rem] border border-outline-variant bg-surface-container-low p-3">
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                      Business health
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-container">
                      +24%
                    </span>
                  </div>

                  <div className="flex h-20 items-end gap-1.5">
                    {chartBars.map((bar, index) => (
                      <motion.div
                        key={`${bar}-${index}`}
                        className="w-full rounded-t-lg bg-gradient-to-t from-primary-container to-primary/80"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.65, delay: index * 0.08 }}
                        style={{ minHeight: "18%" }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-3">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: 0.08 + index * 0.08 }}
                      className="rounded-[0.95rem] border border-outline-variant bg-surface-container p-2.5"
                    >
                      <div className="mb-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary-container/10 text-[0.7rem] font-bold text-primary-container">
                        0{index + 1}
                      </div>
                      <h3 className="text-[0.8rem] font-semibold text-primary">{pillar.title}</h3>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[1.08rem] border border-outline-variant bg-surface-container-low p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                      What we deliver
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-container">
                      End-to-end
                    </span>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    {pillars.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-2.5 rounded-lg border border-outline-variant/70 bg-surface-container p-2.5"
                      >
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-primary-container" />
                        <div>
                          <h4 className="text-[0.8rem] font-semibold text-primary">{item.title}</h4>
                          <p className="mt-1 text-[0.68rem] leading-4 text-on-surface-variant">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
