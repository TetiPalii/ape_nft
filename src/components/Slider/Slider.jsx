'use client';

import React from 'react';
import ReactSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

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
        className="border-0 bg-transparent font-['Biro_Script_Plus_Bold_US'] text-2xl absolute left-[145px] bottom-[-52px] hover:text-accentColor focus:text-accentColor"
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
    responsive: [
      {
        breakpoint: 3860,
        settings: {
          centerMode: centralMode,
          infinite: infinite,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          infinite: infinite,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          infinite: infinite,
          slidesToShow: 1,
        },
      },
    ],
  };
  return <ReactSlider {...settings}>{children}</ReactSlider>;
};
