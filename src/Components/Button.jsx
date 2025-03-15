import React from 'react';

const Button = ({ label, iconUrl, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white ${className}`}
      {...props}
    >
      {label}
      {iconUrl && <img src={iconUrl} alt="Icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
