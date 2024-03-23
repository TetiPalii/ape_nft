'use client';

import React from 'react';
import ReactSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BluetoothIcon } from 'lucide-react';

export const Slider = ({
  centralMode = true,
  className = 'centralMode',
  infinite = false,
  children,
}) => {
  //   const SampleNextArrow = props => {
  //       const { className, style, onClick } = props;

  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: 'block',
  //           position: 'absolute',
  //           width: '24px',
  //           height: '24px',
  //         }}
  //         onClick={onClick}
  //       >
  //         Next
  //       </div>
  //     );
  //   };

  //   const SamplePrevArrow = props => {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: 'block',
  //           width: '24px',
  //           height: '24px',
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="border-0 bg-transparent font-BiroScript text-2xl absolute left-[170px] bottom-[-45px]"
      >
        Next
      </button>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="border-0 bg-transparent font-BiroScript text-2xl absolute bottom-[-45px] left-[40px]"
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
