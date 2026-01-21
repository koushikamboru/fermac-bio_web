import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002F3C] text-white py-6">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6 items-start">
          {/* Company Info */}
          <div className="md:col-span-1 lg:col-span-3">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/logo/footer logo 1.svg"
                  alt="FERMAC BIO"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold leading-tight">
                  FERMAC
                </span>
                <span className="text-cyan-400 text-xl font-bold leading-tight">
                  BIO
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-normal">
              Leading Biotechnology Company Specializing In Antibiotics
              Manufacturing Through Advanced Fermentation Processes.
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Image
                  src="/icons/mage_linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Image
                  src="/icons/icon-park-outline_twitter.svg"
                  alt="X / Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Image
                  src="/icons/ri_instagram-fill.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-sm md:text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-sm md:text-lg mb-4">Products & Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Custom Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Research & Development
                </Link>
              </li>
            </ul>
          </div>
          {/* Locations */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="font-bold text-sm md:text-lg mb-4 tracking-wide">
              Locations
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-cyan-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-xs md:text-sm">
                  <div className="font-semibold text-white mb-1">Corporate Headquarters</div>
                  <a
                    href="https://maps.app.goo.gl/7VTSratuc3JnYiNV6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors block"
                  >
                    Plot No: 08, 1st Floor, Dommara Pochampally, Dundigal Village, Dundigal - Gandimaisamma - 500 043, Telangana
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-cyan-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-xs md:text-sm">
                  <div className="font-semibold text-white mb-1">Factory & Works</div>
                  <a
                    href="https://maps.app.goo.gl/bxL38GxmpFgtziTH8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors block"
                  >
                    Survey No. 273 & 274, Usirikapally Village, Shivampet Mandal, Medak(Dt), Hyderabad, Telangana, India, 502334
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-sm md:text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image
                    src="/icons/ic_baseline-phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-sm">
                  Main:{" "}
                  <a href="tel:+914024242999" className="no-underline">
                    +91 40 2424 2999
                  </a>
                  <br />
                  Sales & Support:{" "}
                  <a href="tel:+914099999999" className="no-underline">
                    +91 40 9999 9999
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image
                    src="/icons/ic_twotone-email.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-sm">
                  General:{" "}
                  <a href="mailto:info@fermacbio.in" className="no-underline">
                    info@fermacbio.in
                  </a>
                  <br />
                  Sales:{" "}
                  <a href="mailto:sales@fermacbio.in" className="no-underline">
                    sales@fermacbio.in
                  </a>
                  <br />
                  Support:{" "}
                  <a
                    href="mailto:support@fermacbio.in"
                    className="no-underline"
                  >
                    support@fermacbio.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-teal-800 pt-3 mt-3">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© Fermac Bio Private Limited. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Terms Of Services
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
