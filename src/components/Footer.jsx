import React from "react";
import {  FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Copyright */}
        <div>
          <h2 className="text-2xl font-bold">GAMEZONE</h2>
          <p className="mt-4 text-sm">
            Copyright &copy; 2025 Gamezone All Rights Reserved
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
            <li><Link to ='/'>Home</Link></li>
            <li><Link to = '/allReview'>All Reviews</Link></li>
            <li><Link to = '/allReview'>Add Reviews</Link></li>
            <li><Link to = '/about'>About Us</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a  target="_blank" href="https://www.facebook.com/sheikh.riaz.3158" className="hover:text-gray-400 flex items-center">
            <FaFacebook className="mr-1"></FaFacebook>  Facebook
            </a>
            <a target="_blank" href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=google&gs_lcrp=EgZjaHJvbWUqGAgBEC4YQxiDARjHARixAxjRAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyGAgBEC4YQxiDARjHARixAxjRAxiABBiKBTIGCAIQRRg7MgYIAxBFGEEyBggEEEUYQTIGCAUQRRg8MgYIBhAFGEAyBggHEEUYQdIBCDc2NTFqMGoxqAIIsAIB&sourceid=chrome&ie=UTF-8"  className="hover:text-gray-400 flex items-center">
            <FaGoogle className="mr-1"/>  Google+
            </a>
            <a target="_blank" href="https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9"    className="hover:text-gray-400 flex items-center">
            <FaLinkedin className="mr-1"/>  LinkeDin
            </a>
        
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
