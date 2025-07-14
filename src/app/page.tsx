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

export default function Home() {
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
    <div id="top" className="min-h-screen bg-white">
      {/* Hero Section - Cleaner Design */}
      <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <Image
          src="/mech.jpeg"
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
              Welcome to ECHELON 25, the inaugural career fair organized by the
              Department of Mechanical Engineering, University of Moratuwa. This
              event brings together passionate, skilled mechanical engineering
              students and visionary companies leading innovation across
              industries. ECHELON 25 is more than a career fair — it’s a
              celebration of talent, ambition, and collaboration. Join us on
              17th June 2025 to unlock new opportunities, build meaningful
              connections, and take bold steps toward success.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/mech.jpeg"
                alt="Robotics & Automation"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="7"
                    width="20"
                    height="10"
                    rx="2"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="2"
                    width="10"
                    height="20"
                    rx="2"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Robotics & Automation
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/logo-banner.jpg"
                alt="Manufacturing"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                  <path d="M8 16V8h8v8" stroke="#FFA600" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Manufacturing
                </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/mech.jpeg"
                alt="Thermal & Fluid"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2v20M6 6l6 6 6-6"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Thermal & Fluid
                </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/logo-banner.jpg"
                alt="Product Design"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 20l16-16M4 4h16v16H4V4z"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Product Design
                </span>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/mech.jpeg"
                alt="Aerospace"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M2 12h20M12 2v20" stroke="#FFA600" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Aerospace
                </span>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/logo-banner.jpg"
                alt="Biomedical"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                  <path d="M8 12h8M12 8v8" stroke="#FFA600" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Biomedical
                </span>
              </div>
            </div>
            {/* Card 7 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/mech.jpeg"
                alt="Mechatronics"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="4"
                    stroke="#FFA600"
                    strokeWidth="2"
                  />
                  <path d="M8 8h8v8H8V8z" stroke="#FFA600" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Mechatronics
                </span>
              </div>
            </div>
            {/* Card 8 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/logo-banner.jpg"
                alt="Marine Engineering"
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex items-center gap-2 px-6 py-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M2 20h20M12 2v20" stroke="#FFA600" strokeWidth="2" />
                </svg>
                <span className="text-base font-semibold text-gray-800 font-montserrat">
                  Marine Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Teaser */}
      <section id="partners" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 font-montserrat">
            Our Industry Partners
          </h2>

          {/* <Carousel className="mb-16 max-w-7xl mx-auto py-16 overflow-visible" opts={{ loop: true }} plugins={[autoplay]}>
            <CarouselContent className="overflow-visible">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 flex items-center justify-center overflow-visible">
                  <Card className="bg-white border border-orange-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col items-center justify-center p-10 min-h-[240px] w-full max-w-xs mx-auto">
                    <img src={partnerImages[index % partnerImages.length]} alt={partner} className="w-24 h-24 object-cover rounded-2xl mb-6 shadow-md" />
                    <CardContent className="flex items-center justify-center w-full h-full p-0">
                      <div className="text-2xl font-bold text-gray-700 hover:text-primary transition-colors font-montserrat text-center w-full">
                        {partner}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Link href="/partners">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full transition-all duration-200 hover:scale-105 border-primary text-primary hover:bg-[#FFA600] hover:text-white font-montserrat font-semibold"
            >
              Learn about partnership opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
           */}
          <div className="flex flex-col items-center justify-center py-16">
            {/* Modern filled lock icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#FFA600] mb-4"
              fill="#FFA600"
              viewBox="0 0 24 24"
            >
              <path d="M17 8V7a5 5 0 00-10 0v1a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zm-8-1a3 3 0 016 0v1H9zm10 11a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1h14a1 1 0 011 1v7z" />
            </svg>
            <span className="text-xl md:text-2xl font-semibold text-gray-500 font-montserrat">
              Coming soon...
            </span>
          </div>
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
  );
}
