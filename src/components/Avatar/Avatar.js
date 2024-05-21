import React from 'react';

const Avatar = ({children}) => {
  return (
    <div className="avatar w-8 h-8 text-sm rounded-full bg-gray-200 flex items-center justify-center text-gray-700 ">
      {children}
    </div>
  );
};

export default Avatar;
