"use client";

import React, { useState } from "react";
import { X, Phone, Mail, FileText } from "lucide-react";
import Image from "next/image";

// StudentCard Component
type StudentCardProps = {
  name: string;
  specialization: string;
  image: string;
  phone: string;
  email: string;
  description: string;
  cv: string;
};

export const StudentCard = ({
  name,
  specialization,
  image,
  phone,
  email,
  description,
  cv,
}: StudentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getDriveImageUrl = (url: string) => {
    const match = url.match(/id=([^&]+)/);
    return match
      ? `https://drive.google.com/uc?export=view&id=${match[1]}`
      : url;
  };

  const safeImageUrl = getDriveImageUrl(image);

  return (
    <>
      {/* Main Card */}
      <div
        className={`relative w-full bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xl ${
          isHovered ? "transform scale-105 shadow-2xl" : ""
        }`}
        style={{ boxShadow: '0 0 0 4px rgba(249,115,22,0.2), 0 8px 32px 0 rgba(31,38,135,0.10)' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {/* Profile Section */}
        <div className={`p-6 text-center bg-white transition-all duration-300 ${isHovered ? 'blur-sm' : ''}`}>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg relative">
            <Image
              src={safeImageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <h2 className="text-xl font-bold text-black mb-2">{name}</h2>
          <p className="text-gray-800 text-sm leading-relaxed line-clamp-3">
            {specialization}
          </p>
        </div>

        {/* Orange Blur Overlay & Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-20">
            <div className="text-center w-full">
              <h3 className="text-xl font-bold text-black mb-4 drop-shadow">Quick Info</h3>
              <div className="space-y-3 text-base">
                <div className="flex items-center justify-center text-black">
                  <Phone className="w-5 h-5 mr-2 text-[#FFA600]" />
                  <span className="font-semibold tracking-wide">{phone}</span>
                </div>
                <div className="flex items-center justify-center text-black">
                  <Mail className="w-5 h-5 mr-2 text-[#FFA600]" />
                  <span className="truncate font-semibold tracking-wide">{email}</span>
                </div>
              </div>
              <p className="text-black text-sm mt-4 font-medium drop-shadow">
                Click for full details
              </p>
            </div>
          </div>
        )}

        {/* Gradient Border Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
            isHovered
              ? "bg-gradient-to-r from-orange-400 to-orange-600 opacity-20"
              : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/70 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl" style={{ boxShadow: '0 0 0 4px rgba(249,115,22,0.2), 0 8px 32px 0 rgba(31,38,135,0.10)' }}>
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Modal Content */}
            <div className="p-10 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-8">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#FFA600] shadow-lg mb-6 md:mb-0" style={{ boxShadow: '0 0 0 4px rgba(249,115,22,0.2), 0 8px 32px 0 rgba(31,38,135,0.10)' }}>
                  <Image
                    src={safeImageUrl}
                    alt={name}
                    width={176}
                    height={176}
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl font-extrabold text-black mb-2 font-montserrat">
                    {name}
                  </h1>
                  <p className="text-[#FFA600] text-xl mb-4 font-semibold font-montserrat">
                    {specialization}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{description}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-4 font-montserrat">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center text-black text-lg">
                    <Phone className="w-6 h-6 mr-3 text-[#FFA600]" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center text-black text-lg">
                    <Mail className="w-6 h-6 mr-3 text-[#FFA600]" />
                    <span>{email}</span>
                  </div>
                </div>
              </div>

              {/* External Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* {cv && (
                  <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-7 py-3 bg-[#FFA600] hover:bg-[#ffb733] text-white rounded-full font-semibold text-base gap-2 shadow-orange-pop transform transition-all duration-200 hover:scale-105"
                    style={{ boxShadow: '0 4px 20px 0 #FFA60066' }}
                  >
                    <FileText className="w-5 h-5" />
                    View CV
                  </a>
                )} */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center px-7 py-3 bg-white hover:bg-gray-100 text-[#FFA600] rounded-full font-semibold text-base gap-2 shadow-orange-pop transform transition-all duration-200 hover:scale-105"
                  style={{ boxShadow: '0 4px 20px 0 #FFA60066' }}
                >
                  <Mail className="w-5 h-5 mr-2 text-[#FFA600]" />
                  Send Email
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center px-7 py-3 bg-white hover:bg-gray-100 text-black rounded-full font-semibold text-base gap-2 shadow-orange-pop transform transition-all duration-200 hover:scale-105"
                  style={{ boxShadow: '0 4px 20px 0 #FFA60066' }}
                >
                  <Phone className="w-5 h-5 mr-2 text-[#FFA600]" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
