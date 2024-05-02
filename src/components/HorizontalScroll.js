import React, { useRef } from 'react';

const HorizontalScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    
  };

  const scrollRight = () => {
    
  };

  return (
    <div className="relative flex items-center overflow-x-auto border border-gray-200 rounded-lg">
      <button onClick={scrollLeft} className="small rounded-3xl p-3 m-3 bg-blue-200 absolute left-0 z-10">{'<'}</button>
      <div className="flex" ref={scrollRef}>
        {children}
      </div>
      <button onClick={scrollRight} className="small rounded-3xl p-3 m-3 bg-blue-200 absolute right-0 z-10">{'>'}</button>
    </div>
  );
};

export default HorizontalScroll;
