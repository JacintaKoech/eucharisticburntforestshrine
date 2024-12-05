import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-shrine-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Burnt Forest Shrine</p>
            <p>P.O. Box 123</p>
            <p>Burnt Forest, Kenya</p>
            <p>Email: info@burntforestshrine.org</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-shrine-secondary">About Us</a></li>
              <li><a href="/events" className="hover:text-shrine-secondary">Events</a></li>
              <li><a href="/donate" className="hover:text-shrine-secondary">Support Us</a></li>
              <li><a href="/contact" className="hover:text-shrine-secondary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Prayer Times</h3>
            <ul className="space-y-2">
              <li>Daily Mass: 8:00 AM</li>
              <li>Adoration: 3:00 PM - 4:00 PM</li>
              <li>Evening Prayer: 6:00 PM</li>
              <li>Sunday Mass: 10:00 AM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Eucharistic Burnt Forest Shrine. All rights reserved.</p>
          <p>Built With 🤍 By Jacinta Chepkorir & Emmanuel Enzeyi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
