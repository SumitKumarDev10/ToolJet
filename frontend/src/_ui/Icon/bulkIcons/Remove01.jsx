import React from 'react';

const Remove01 = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      d="M14.8284 6.34287C15.6094 5.56182 16.8758 5.56182 17.6568 6.34287C18.4379 7.12392 18.4379 8.39024 17.6568 9.17129L9.17154 17.6566C8.39049 18.4376 7.12416 18.4376 6.34311 17.6566C5.56206 16.8755 5.56206 15.6092 6.34311 14.8281L14.8284 6.34287Z"
      fill={fill}
    />
    <path
      d="M17.6568 14.828C18.4379 15.6091 18.4379 16.8754 17.6568 17.6565C16.8758 18.4375 15.6094 18.4375 14.8284 17.6565L6.34311 9.17117C5.56206 8.39012 5.56206 7.12379 6.34311 6.34274C7.12416 5.5617 8.39049 5.5617 9.17154 6.34274L17.6568 14.828Z"
      fill={fill}
    />
  </svg>
);

export default Remove01;