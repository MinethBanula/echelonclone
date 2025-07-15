"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Papa from "papaparse";

import { StudentCard } from "@/components/ui/student-card";

// Main Component
export default function StudentGridPage() {
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(9); // 3x3 grid per page

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSi8GBLT3PhjOq6nNwfKZi86SHqCxoxtCVy4w7W4TAjU4sszzaoypKWVuqUizlQNAf_m8mSCCpmz8K_/pub?gid=1786785156&single=true&output=csv";

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        const parsed = Papa.parse<string[]>(csvText, {
          header: false,
          skipEmptyLines: true,
        });
        setData(parsed.data);
      } catch (error) {
        console.error("CSV load error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  const headers = data[0] || [];
  const rows = data.slice(1);

  // Build student objects using headers only
  const students = rows.map((row) => {
    const rowData: Record<string, string> = headers.reduce((acc, header, i) => {
      acc[header.trim().toLowerCase()] = row[i];
      return acc;
    }, {} as Record<string, string>);

return {
  name: rowData["name"] || "",
  specialization: rowData["mapped areas"] || "",
  image: rowData["profile picture"] || "",
  phone: rowData["contact number"] || "",
  email: rowData["personal gmail address"] || "",
  description: rowData["brief introduction h"] || "",
  cv: rowData["cv"] || "",
  linkdin: rowData["linkedin"] || "",
};

  });

  // Calculate pagination
  const totalPages = Math.ceil(students.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (loading) {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
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
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our <span className="text-primary">Talented Students</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            ECHELON&apos;25 showcases the brightest minds in Mechanical engineering.
            Connect with our students to discover their skills, projects, and
            research interests.
          </p>
        </div>

        {/* Student Profiles Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black text-center mb-2">
            Student Profiles
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Meet our department&apos;s talented students
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentStudents.map((student, index) => (
              <StudentCard
                key={`${student.name}-${index}`}
                name={student.name}
                specialization={student.specialization}
                image={student.image}
                phone={student.phone}
                email={student.email}
                description={student.description}
                // cv={student.cv}
                linkdin={student.linkdin}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`flex items-center px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFA600] focus:ring-offset-2 border-none ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-[#FFA600] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#FFA600]/40 shadow-[#FFA600]/20"
                }`}
                style={currentPage === 1 ? {} : { boxShadow: '0 4px 20px 0 #FFA60033' }}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-full font-semibold transition-all duration-200 border-none focus:outline-none focus:ring-2 focus:ring-[#FFA600] focus:ring-offset-2 ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-[#FFA600]/40 scale-110"
                          : "bg-gray-100 text-gray-700 hover:bg-[#FFA600] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#FFA600]/40"
                      }`}
                      style={isActive ? { boxShadow: '0 4px 20px 0 #FFA60033' } : {}}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFA600] focus:ring-offset-2 border-none ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-[#FFA600] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#FFA600]/40 shadow-[#FFA600]/20"
                }`}
                style={currentPage === totalPages ? {} : { boxShadow: '0 4px 20px 0 #FFA60033' }}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          )}

          {/* Page Info */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Showing {startIndex + 1}-{Math.min(endIndex, students.length)} of{" "}
              {students.length} students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
