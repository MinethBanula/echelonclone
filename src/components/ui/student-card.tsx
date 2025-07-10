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
        className={`relative w-full bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg border border-gray-200 ${
          isHovered ? "transform scale-105 shadow-2xl" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {/* Profile Section */}
        <div className="p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg relative">
            <Image
              src={safeImageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {specialization}
          </p>
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-95 flex flex-col justify-center items-center p-6 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-orange-500" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  <span className="truncate">{email}</span>
                </div>
              </div>
              <p className="text-orange-500 text-sm mt-4 font-medium">
                Click for full details
              </p>
            </div>
          </div>
        )}

        {/* Gradient Border Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-r from-orange-400 to-orange-600 opacity-10"
              : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={safeImageUrl}
                    alt={name}
                    width={160}   // fixed width
                    height={160} // fixed height      
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {name}
                  </h1>
                  <p className="text-orange-600 text-lg mb-4 font-medium">
                    {specialization}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{email}</span>
                  </div>
                </div>
              </div>

              {/* External Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {cv && (
                  <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View CV
                  </a>
                )}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
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
