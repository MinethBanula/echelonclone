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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading students...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Talented Students</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            EESPIRE showcases the brightest minds in electrical engineering.
            Connect with our students to discover their skills, projects, and
            research interests.
          </p>
        </div>

        {/* Student Profiles Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Student Profiles
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Browse through our electrical engineering talent showcase
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
                cv={student.cv}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-orange-500 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
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
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
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
