import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 font-montserrat">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="font-montserrat">Govindu Sasanka</p>
              <p className="text-gray-400 font-montserrat">
                govindu@echelon25.com
              </p>
              <p className="font-montserrat">Lochinie Rubasinghe</p>
              <p className="text-gray-400 font-montserrat">
                lochinie@echelon25.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-montserrat">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#about"
                className="block hover:text-primary transition-colors font-montserrat"
              >
                About
              </a>
              <a
                href="#agenda"
                className="block hover:text-primary transition-colors font-montserrat"
              >
                Agenda
              </a>
              <Link
                href="/partners"
                className="block hover:text-primary transition-colors font-montserrat"
              >
                Partners
              </Link>
              <a
                href="#faqs"
                className="block hover:text-primary transition-colors font-montserrat"
              >
                FAQs
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-montserrat">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-montserrat">
              University of Moratuwa
            </h4>
            <p className="text-sm text-gray-400 font-montserrat">
              Designed with Montserrat typography and ECHELON 25 color palette
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p className="font-montserrat">
            &copy; 2025 ECHELON 25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
