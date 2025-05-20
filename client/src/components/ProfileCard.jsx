import React from 'react';

function ProfileCard({ name, title, subtitle, imgSrc }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 text-center flex-1 max-w-md mx-auto">
      <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover" />
      <h4 className="mt-4 text-lg font-semibold text-blue-800">{name}</h4>
      <p className="mt-2 text-gray-600 text-sm">{title}</p>
      <p className="mt-1 text-gray-500 text-sm">{subtitle}</p>
      <button className="mt-4 px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 text-sm">
        View Profile
      </button>
    </div>
  );
}
export default ProfileCard;