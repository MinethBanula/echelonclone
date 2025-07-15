"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OrganizingCommittee } from "@/components/organizing-committee";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  // CardContent, // Removed unused import
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Plane,
  Car,
  HeartPulse,
  Factory,
  Wrench,
  Settings,
  Cpu,
  Ship,
  Zap,
  PencilRuler,
  ClipboardList,
  Bot,
  Droplets,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect } from "react";

// Define partners and partnerImages arrays
// const partners = [
//   "Company A",
//   "Company B",
//   "Company C",
//   "Company D",
//   "Company E",
//   "Company F",
//   "Company G",
//   "Company H",
// ];
const partnerImages = ["/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "How do I register for ECHELON 25?",
      answer:
        "Registration is free for all UoM students. Click the 'Register Now' button and fill out the online form with your student details.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, ECHELON 25 is completely free for all University of Moratuwa students. Just bring your student ID for verification.",
    },
    {
      question: "What should I bring to the fair?",
      answer:
        "Bring multiple copies of your resume, your student ID, and dress professionally. A notepad for taking notes during sessions is also recommended.",
    },
    {
      question: "Who is eligible to attend?",
      answer:
        "All University of Moratuwa students are welcome, with special focus on Mechanical Engineering undergraduates and recent graduates.",
    },
    {
      question: "Will there be refreshments provided?",
      answer:
        "Yes, complimentary refreshments will be available throughout the day, including a networking lunch session.",
    },
  ];

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
          <div className="text-center">
            {/* Loading Spinner */}
            <div className="relative mb-8">
              <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-orange-500 mx-auto"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-orange-300 mx-auto opacity-50"></div>
            </div>
            {/* Loading Text */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
                Loading
              </h2>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="top" className="min-h-screen bg-white">
        {/* Hero Section - Cleaner Design */}
        <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
          <Image
            src="/mech.jpg"
            alt="Mechanical Engineering Hero"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg font-montserrat">
              Recruit the Nation&apos;s Top Mechanical Engineering Talent
            </h1>
            <p className="text-white text-lg md:text-2xl text-center mb-8 font-serif drop-shadow font-light">
              Join us at the University of Moratuwa
              <br />
              premier mechanical engineering career fair
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full transition-all duration-200 hover:scale-105 bg-primary hover:bg-[#FFA600] hover:text-white text-white px-8 py-4 text-lg font-semibold font-montserrat shadow-lg"
              >
                <Link
                  href="https://fill.buildform.ai/forms/QEbpjwC2dHhf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full transition-all duration-200 hover:scale-105 border-primary text-primary hover:bg-[#FFA600] hover:text-white px-8 py-4 text-lg font-semibold font-montserrat shadow-lg"
              >
                <Link
                  href="https://drive.google.com/file/d/15qtzUw6jl6__bvzOu1XpZad-XZYhxxtC/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner Proposals
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What is ECHELON 25 Section (moved up) */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="ECHELON 25 Logo"
                width={360}
                height={135}
                className="mx-auto mb-6 w-72 md:w-[22rem] h-auto"
                priority
              />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 font-montserrat mb-6">
                What is ECHELON 25 ?
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-montserrat mb-8 max-w-3xl mx-auto">
                Welcome to ECHELON 25, the inaugural career fair organized by
                the Department of Mechanical Engineering, University of
                Moratuwa. This event brings together passionate, skilled
                mechanical engineering students and visionary companies leading
                innovation across industries. ECHELON 25 is more than a career
                fair — it’s a celebration of talent, ambition, and
                collaboration. Join us on 17th June 2025 to unlock new
                opportunities, build meaningful connections, and take bold steps
                toward success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg font-montserrat font-semibold text-gray-700">
                <span className="flex items-center gap-2 text-[#FFA600]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      fill="none"
                      stroke="#FFA600"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 2v4M16 2v4M3 10h18"
                      stroke="#FFA600"
                      strokeWidth="2"
                    />
                  </svg>
                  17 July 2025
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FFA600]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#FFA600"
                    />
                  </svg>
                  Mechanical Engineering Dept. UoM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-800 font-montserrat">
              Why Attend?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div>
                <svg
                  className="mx-auto mb-6"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M32 4C18.745 4 8 14.745 8 28c0 13.255 24 32 24 32s24-18.745 24-32C56 14.745 45.255 4 32 4z"
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M32 36a8 8 0 100-16 8 8 0 000 16z"
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat mb-2">
                  Top Talent
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Consistently ranked
                  <br />
                  among the best university
                  <br />
                  in Sri Lanka
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-6"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="#FFA600"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M20 44V28h24v16M24 44V36h16v8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                  <rect
                    x="28"
                    y="20"
                    width="8"
                    height="8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat mb-2">
                  Industry-Ready
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Students with 6 months of
                  <br />
                  work experience. Hands-on project work,
                  <br />
                  cutting-edge research exposure.
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-6"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="#FFA600"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M32 44V28m0 0l8 8m-8-8l-8 8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="24"
                    height="8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat mb-2">
                  Diverse Disciplines
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Robotics, thermofluids,
                  <br />
                  manufacturing, design, energy
                  <br />
                  systems, biomechanics.
                </p>
              </div>
              <div>
                <svg
                  className="mx-auto mb-6"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="#FFA600"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M32 44V36m0 0l8 8m-8-8l-8 8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                  <rect
                    x="24"
                    y="20"
                    width="16"
                    height="8"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                  <path d="M32 12v8" stroke="#FFA600" strokeWidth="3" />
                  <circle
                    cx="32"
                    cy="12"
                    r="4"
                    stroke="#FFA600"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat mb-2">
                  Future Leaders
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Our graduates work at
                  <br />
                  esteemed companies,
                  <br />
                  startups, and research careers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Disciplines Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-800 font-montserrat">
              Explore a Range of Mechanical Engineering Disciplines
            </h2>
            {/* New fast auto-scrolling carousel of disciplines (HTML/CSS ported) */}
            <div className="flex flex-col gap-8">
              {/* First row: scroll left */}
              <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -mx-[50vw]">
                <div className="flex gap-6 min-w-max animate-scroll-left-fast">
                  {/* Aerospace and Aviation */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Plane className="w-6 h-6" />
                    Aerospace and Aviation
                  </span>

                  {/* Automobile Engineering */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Car className="w-6 h-6" />
                    Automobile Engineering
                  </span>

                  {/* Biomedical and Sports Engineering */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <HeartPulse className="w-6 h-6" />
                    Biomedical and Sports Engineering
                  </span>

                  {/* Industrial Systems and Operations */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Factory className="w-6 h-6" />
                    Industrial Systems and Operations
                  </span>

                  {/* Maintenance Engineering */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Wrench className="w-6 h-6" />
                    Maintenance Engineering
                  </span>

                  {/* Manufacturing and Production */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Settings className="w-6 h-6" />
                    Manufacturing and Production
                  </span>

                  {/* Mechatronic Systems and Control */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Cpu className="w-6 h-6" />
                    Mechatronic Systems and Control
                  </span>

                  {/* Duplicates for seamless loop */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Plane className="w-6 h-6" />
                    Aerospace and Aviation
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Car className="w-6 h-6" />
                    Automobile Engineering
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <HeartPulse className="w-6 h-6" />
                    Biomedical and Sports Engineering
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Factory className="w-6 h-6" />
                    Industrial Systems and Operations
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Wrench className="w-6 h-6" />
                    Maintenance Engineering
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Settings className="w-6 h-6" />
                    Manufacturing and Production
                  </span>

                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Cpu className="w-6 h-6" />
                    Mechatronic Systems and Control
                  </span>
                </div>
                {/* <div className="flex gap-6 min-w-max animate-scroll-left-fast">
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Aerospace and Aviation
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Automobile Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Biomedical and Sports Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Industrial Systems and Operations
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Maintenance Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Manufacturing and Production
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Mechatronic Systems and Control
                  </span> */}
                {/* Duplicate for seamless loop */}
                {/* <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Aerospace and Aviation
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Automobile Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Biomedical and Sports Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Industrial Systems and Operations
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Maintenance Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Manufacturing and Production
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Mechatronic Systems and Control
                  </span>
                </div> */}
              </div>
              {/* Second row: scroll right */}
              <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -mx-[50vw]">
                <div className="flex gap-6 min-w-max animate-scroll-right-fast">
                  {/* Duplicate for seamless loop */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Ship className="w-6 h-6" />
                    Naval Architecture and Marine Engineering
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Zap className="w-6 h-6" />
                    Power and Energy
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <PencilRuler className="w-6 h-6" />
                    Product Design and Development
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <ClipboardList className="w-6 h-6" />
                    Project Management
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Bot className="w-6 h-6" />
                    Robotics and Automation
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Droplets className="w-6 h-6" />
                    Thermal and Fluid Systems
                  </span>

                  {/* Main set */}
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Ship className="w-6 h-6" />
                    Naval Architecture and Marine Engineering
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Zap className="w-6 h-6" />
                    Power and Energy
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <PencilRuler className="w-6 h-6" />
                    Product Design and Development
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <ClipboardList className="w-6 h-6" />
                    Project Management
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Bot className="w-6 h-6" />
                    Robotics and Automation
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    <Droplets className="w-6 h-6" />
                    Thermal and Fluid Systems
                  </span>
                  {/* Duplicate for seamless loop */}
                  {/* <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Naval Architecture and Marine Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Power and Energy
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Product Design and Development
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Project Management
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Robotics and Automation
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Thermal and Fluid Systems
                  </span> */}
                  {/* Main set */}
                  {/* <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Naval Architecture and Marine Engineering
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Power and Energy
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Product Design and Development
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Project Management
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Robotics and Automation
                  </span>
                  <span className="inline-block rounded-full bg-[#FFA600] text-white font-bold text-lg md:text-2xl px-8 py-4 border-2 border-[#333] font-montserrat">
                    Thermal and Fluid Systems
                  </span> */}
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll-left-fast {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              @keyframes scroll-right-fast {
                0% {
                  transform: translateX(-50%);
                }
                100% {
                  transform: translateX(0);
                }
              }
              .animate-scroll-left-fast {
                animation: scroll-left-fast 16s linear infinite;
              }
              .animate-scroll-right-fast {
                animation: scroll-right-fast 20s linear infinite;
              }
            `}</style>
          </div>
        </section>

        {/* Partners Teaser */}
        <section id="partners" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 font-montserrat">
              Our Industry Partners
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              {/* Platinum Partner */}
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[200px] min-h-[200px] aspect-square bg-white border-4 border-orange-300 shadow-[0_0_35px_rgba(255,215,0,0.5)] rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/platinum.png"
                    alt="Platinum Partner"
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 pointer-events-none" />
                </div>
                <span className="block mt-10 text-2xl font-bold text-gray-800 font-montserrat text-center tracking-wide">
                  Platinum Partner
                </span>
              </div>

              {/* Talent Partner */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[200px] min-h-[200px] aspect-square bg-white border-4 border-orange-300 shadow-2xl rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/talent.png"
                    alt="Talent Partner"
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="block mt-10 text-2xl font-bold text-gray-800 font-montserrat text-center">
                  Talent Partner
                </span>
              </div>

              {/* Bronze Partner */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[200px] min-h-[200px] aspect-square bg-white border-4 border-orange-300 shadow-2xl rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/omega.jpg"
                    alt="Bronze Partner"
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="block mt-10 text-2xl font-bold text-gray-800 font-montserrat text-center">
                  Bronze Partner
                </span>
              </div>
            </div>

            {/* Standard partners */}
            <Carousel
              className="mb-16 max-w-7xl mx-auto py-16 overflow-visible"
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
            >
              <CarouselContent className="overflow-visible bg-white">
                {partnerImages.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 lg:basis-1/4 flex items-center justify-center overflow-visible"
                  >
                    <div className="w-full max-w-[200px] mx-auto min-h-[200px] aspect-square flex items-center justify-center">
                      <Card className="w-full h-full aspect-square p-0 bg-white border-4 border-orange-200 overflow-hidden group">
                        <div className="w-full h-full aspect-square relative flex items-center justify-center">
                          <img
                            src={img}
                            alt="Partner showcase"
                            className="object-contain w-full h-full border-0"
                            style={{ minHeight: "100%", minWidth: "100%" }}
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <span className="block mt-10 text-3xl font-bold text-gray-800 font-montserrat text-center">
                Standard partners
              </span>
            </Carousel>
            {/* Replace broken Partner Proposals button with a correct external link button */}
            <a
              href="https://drive.google.com/file/d/15qtzUw6jl6__bvzOu1XpZad-XZYhxxtC/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full transition-all duration-200 hover:scale-105 border-primary text-primary hover:bg-[#FFA600] hover:text-white font-montserrat font-semibold"
              >
                Learn about partnership opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Organizing Committee */}
        <section id="students">
          <OrganizingCommittee />
        </section>

        {/* FAQs Accordion */}
        <section id="faqs" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto rounded-3xl border border-orange-100 shadow-xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 bg-white/80 shadow-md hover:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary font-montserrat text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed font-montserrat">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
