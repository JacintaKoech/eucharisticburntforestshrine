import React from 'react';
import { CalendarIcon, ChatBubbleLeftIcon, MapIcon } from '@heroicons/react/24/outline';

const QuickLinks = () => {
  const links = [
    {
      title: 'Upcoming Events',
      description: 'Join us for masses, retreats, and special celebrations',
      icon: CalendarIcon,
      href: '/events'
    },
    {
      title: 'Latest Messages',
      description: 'Read spiritual messages and divine inspirations',
      icon: ChatBubbleLeftIcon,
      href: '/messages'
    },
    {
      title: 'Visit Us',
      description: 'Plan your pilgrimage to the shrine',
      icon: MapIcon,
      href: '/visit'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="group p-6 bg-shrine-light rounded-lg hover:shadow-lg transition-shadow"
            >
              <link.icon className="h-12 w-12 text-shrine-secondary mb-4" />
              <h3 className="text-xl font-semibold text-shrine-dark mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;