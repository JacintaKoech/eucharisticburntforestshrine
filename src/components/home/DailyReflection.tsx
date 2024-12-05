import React from 'react';

const DailyReflection = () => {
  return (
    <div className="bg-shrine-light py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-shrine-dark mb-8">
          Daily Reflection
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg italic text-gray-600 mb-6">
            "The Eucharist is the source and summit of the Christian life."
          </p>
          <p className="text-shrine-primary font-semibold">
            - Lumen Gentium, Vatican II
          </p>
          <div className="mt-6 text-gray-700">
            <p>
              Let us reflect today on the profound mystery of Christ's presence in the Blessed Sacrament,
              a gift of infinite love that transforms our hearts and unites us with the Divine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReflection;