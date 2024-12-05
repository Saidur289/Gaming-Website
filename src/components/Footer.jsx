import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Copyright */}
        <div>
          <h2 className="text-2xl font-bold">GAMEZONE</h2>
          <p className="mt-4 text-sm">
            Copyright &copy; 2024 Filmax All Rights Reserved
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            <li>Playstation 4</li>
            <li>XBOX One</li>
            <li>PC</li>
            <li>Steam</li>
            <li>Origin</li>
          </ul>
        </div>

        {/* Additional Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Additional Links</h3>
          <ul className="space-y-2">
            <li>Games</li>
            <li>Coming Soon</li>
            <li>Trailers</li>
            <li>Reviews</li>
            <li>News</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a  className="hover:text-gray-400">
              Twitter
            </a>
            <a  className="hover:text-gray-400">
              Facebook
            </a>
            <a  className="hover:text-gray-400">
              Google+
            </a>
            <a  className="hover:text-gray-400">
              Instagram
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
