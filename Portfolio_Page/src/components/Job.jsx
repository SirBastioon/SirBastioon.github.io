import React from 'react';

function Job({ title, period, description }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Job;