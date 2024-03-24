'use client';

import React from 'react';
import ReactSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slider = ({
  centralMode = true,
  className = 'centralMode',
  infinite = false,
  children,
}) => {
  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="border-0 bg-transparent font-['Biro_Script_Plus_Bold_US'] text-2xl absolute left-[145px] bottom-[-52px] hover:text-accentColor focus:text-accentColor md:hidden"
      >
        Next
      </button>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="border-0 bg-transparent font-['Biro_Script_Plus_Bold_US'] text-2xl absolute bottom-[-52px] left-[60px] hover:text-accentColor focus:text-accentColor md:hidden"
      >
        Prev
      </button>
    );
  };

  const settings = {
    className: className,
    centerMode: centralMode,
    speed: 500,
    infinite: infinite,
    centerPadding: '0px',
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <ReactSlider {...settings} className="md:hidden">
      {children}
    </ReactSlider>
  );
};
