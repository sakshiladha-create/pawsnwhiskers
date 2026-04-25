"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLatestBlogPosts } from "@/data/blog-data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" }
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube }
];

const paymentBadges = [
  { label: "AMEX", className: "bg-[#D7EBFF] text-[#0D62A5]" },
  { label: "Mastercard", className: "bg-[#FFF0E7] text-[#B54B00]" },
  { label: "VISA", className: "bg-[#F2F4FF] text-[#1E3A8A]" },
  { label: "PayPal", className: "bg-[#ECF6FF] text-[#00457C]" },
  { label: "Shop Pay", className: "bg-[#EFE8FF] text-[#5A31F4]" },
  { label: "Klarna", className: "bg-[#FFE1EB] text-[#7A2047]" }
];

const latestPosts = getLatestBlogPosts(3);

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
     className="relative overflow-hidden bg-white text-[#15233E]"
  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
    >
       {/* Light grey footer body starts BELOW the white top area */}
  <div className="absolute inset-x-0 top-[92px] bottom-0 z-0 bg-[#F5F5F5]" aria-hidden="true" />

  {/* Top layered waves */}
  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[150px] overflow-hidden" aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="h-full w-full">
      {/* back grey wave visible on white */}
      <path
        d="M0 66 C120 40 140 48 210 70 C330 108 410 98 535 58 C650 20 780 12 900 52 C1015 90 1100 88 1205 54 C1300 24 1380 38 1440 62 L1440 150 L0 150 Z"
        fill="#4C6795"
      />

      {/* front footer-grey wave, not white */}
      <path
        d="M0 86 C90 70 126 62 168 76 C250 104 352 126 458 90 C560 55 590 22 735 36 C890 50 930 100 1080 92 C1205 84 1260 48 1365 76 C1400 86 1420 94 1440 88 L1440 150 L0 150 Z"
        fill="#F5F5F5"
      />
    </svg>
  </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150px] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0 66 C120 40 140 48 210 70 C330 108 410 98 535 58 C650 20 780 12 900 52 C1015 90 1100 88 1205 54 C1300 24 1380 38 1440 62 L1440 150 L0 150 Z"
            fill="#D9DEE2"
          />
          <path
            d="M0 86 C90 70 126 62 168 76 C250 104 352 126 458 90 C560 55 590 22 735 36 C890 50 930 100 1080 92 C1205 84 1260 48 1365 76 C1400 86 1420 94 1440 88 L1440 150 L0 150 Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-0 top-[220px] z-0 hidden xl:block" aria-hidden>
        <motion.div
          className="relative h-[220px] w-[170px]"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-2 top-0 text-[#4C6795]">
            <svg width="72" height="74" viewBox="0 0 72 74" fill="none">
              <path d="M18 12C8 18 9 30 20 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M42 8C32 14 33 26 44 26" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M60 18C50 24 51 36 62 36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M8 42C-2 48 -1 60 10 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M32 38C22 44 23 56 34 56" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M56 44C46 50 47 62 58 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 h-[118px] w-[92px] rotate-[-14deg] rounded-[28px] bg-[#F8D8C8]">
            <div className="grid h-full w-full grid-cols-4 gap-2 p-5 opacity-70">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#FFF7F0]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-20 right-0 z-0 hidden xl:block" aria-hidden>
        <motion.div
          className="relative h-[250px] w-[220px]"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute right-10 top-2 text-[#8EDCCB]">
            <svg width="90" height="96" viewBox="0 0 90 96" fill="none">
              <path
                d="M66 6L28 38L52 52L18 88"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-12 rotate-[-18deg] text-[#DA8A70] opacity-90">
            <svg width="110" height="74" viewBox="0 0 110 74" fill="none">
              <path d="M8 62L42 34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M24 70L58 42" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M40 72L74 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path d="M56 70L90 42" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 h-[134px] w-[116px] rounded-[42px] bg-[#D8DEE3]">
            <div className="grid h-full w-full grid-cols-3 gap-3 p-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-2 w-2 rounded-full bg-[#FFF7F0]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-[1320px] px-6 pb-10 pt-32 sm:px-8 lg:px-10 lg:pt-[140px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.9fr_1.4fr]">
          <div className="max-w-[300px]">
            <Link href="/" className="focus-ring inline-flex items-center" aria-label="Paws & Whiskers home">
              <Image
                src="/images/Pawlogo.png"
                alt="Paws & Whiskers"
                width={150}
                height={52}
                className="h-auto w-[150px] object-contain"
              />
            </Link>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#3A4B68]">
              Your one-stop pet store for joyful, healthy, and playful lives. We bring love, care, and quality to every pet.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#15233E] ring-1 ring-black/5 transition hover:text-[#DA8A70]"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Quick Links">
            <h3 className="mb-5 text-lg font-bold text-[#0F2240]" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex text-[14px] font-semibold text-[#15233E] transition hover:translate-x-1 hover:text-[#DA8A70]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#0F2240]" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h3>
            <div className="space-y-3 text-[14px] font-semibold leading-7 text-[#3A4B68]">
               <p>
                No: 568 A, East Madison Street,
                <br />
                Ready Hall, MD, UK 587
              </p>
              <p>Monday-Friday 9am-5pm</p>
              <p className="text-[#DA8A70]">(+1)-613-333-0101</p>
              <p>support@example.com</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#0F2240]" style={{ fontFamily: "var(--font-heading)" }}>
              Latest Blogs
            </h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-center gap-3">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-bold leading-5 text-[#15233E] transition group-hover:text-[#DA8A70]">
                      {post.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#6B7B92]">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.4fr_1.05fr] lg:items-center">
            <div className="max-w-[360px]">
              <h3 className="text-[1.85rem] font-black leading-tight text-[#0F2240]" style={{ fontFamily: "var(--font-heading)" }}>
                Subscribe to our newsletter
              </h3>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3A4B68]">
               Register to receive newsletters to be updated about
the latest activities of the store,..
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row sm:items-center lg:px-4">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="h-16 flex-1 rounded-full border border-black/5 bg-white px-7 text-[14px] font-semibold text-[#15233E] outline-none transition placeholder:text-[#7A879B] focus:border-[#DA8A70]"
              />
              <button
                type="submit"
                className="focus-ring h-16 rounded-full bg-[#DA8A70] px-8 text-[14px] font-bold text-white transition hover:bg-[#4C6795]"
              >
                Subscribe
              </button>
            </form>

            <div className="lg:justify-self-end">
              <div className="flex flex-wrap items-center gap-2">
                {paymentBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`rounded-md px-2.5 py-1.5 text-[11px] font-black tracking-[0.02em] ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-[#223453]">
                © 2026 - Paws & Whiskers. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to top"
        className="focus-ring fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#DA8A70] text-white shadow-sm transition hover:bg-[#4C6795]"
        whileHover={reduceMotion ? undefined : { y: -3 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </motion.button>
    </motion.footer>
  );
}
