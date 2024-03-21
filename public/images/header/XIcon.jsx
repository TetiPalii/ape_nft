import * as React from 'react';
const XIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1E1E1E"
        d="M9.522 6.771 15.48 0h-1.412L8.895 5.88 4.765 0H0l6.247 8.89L0 15.993h1.412l5.461-6.21 4.363 6.21H16l-6.478-9.22ZM7.59 8.97l-.633-.885L1.92 1.039h2.168l4.064 5.686.633.885L14.068 15H11.9L7.589 8.97Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default XIcon;
