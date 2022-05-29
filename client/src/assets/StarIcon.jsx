import React from 'react';
import styled from 'styled-components';
import Icon from 'assets/Icon.jsx';

/*
canvas fit to star
<svg width="20" height="19" xmlns="http://www.w3.org/2000/svg">
  <path d="m10,4.308l1.176,3.167l0.347,0.936l0.997,0.042l3.374,0.14l-2.647,2.09l-0.784,0.62l0.27,0.963l0.91,3.25l-2.813,-1.872l-0.83,-0.553l-0.83,0.552l-2.814,1.87l0.91,-3.248l0.27,-0.962l-0.783,-0.62l-2.648,-2.092l3.374,-0.14l0.996,-0.04l0.347,-0.936l1.178,-3.167m0,-4.308l-2.582,6.953l-7.418,0.304l5.822,4.602l-2.002,7.141l6.18,-4.11l6.18,4.11l-2.002,-7.14l5.822,-4.604l-7.418,-0.305l-2.582,-6.951z" id="svg_3"/>

  opaque star
  <path id="svg_3" d="m10,0l-2.582,6.953l-7.418,0.304l5.822,4.602l-2.002,7.141l6.18,-4.11l6.18,4.11l-2.002,-7.14l5.822,-4.604l-7.418,-0.305l-2.582,-6.951z" opacity="undefined"/>
</svg>
*/


function StarIcon(props) {
  return (
      <Icon viewBox="0 0 24 24">
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stopColor="green"/>
            <stop offset="50%" stopColor="white"/>
          </linearGradient>
        </defs>
        <rect x="0" fill="url(#grad)" width="12" height="24" clipPath="url(#star)"/>
        <path fill="black" d="M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z" />
      </Icon>
  );
}

function OtherStarIcon(props) {
  return (
      <Icon viewBox="0 0 24 24">
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="green"/>
            <stop offset="50%" stop-color="white"/>
          </linearGradient>
        </defs>
        <rect x="0" fill="url(#grad)" width="24" height="24"/>
        <path fill="black" d="M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z" />
        <path fill="black" d="M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z" />
      </Icon>
  );
}

function AnotherStarIcon(props) {
  return (
    <Icon viewBox="0 0 51 48">
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stopColor="black"/>
          <stop offset="50%" stopColor="white"/>
        </linearGradient>
      </defs>
      <path fill="url(#grad)" stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
    </Icon>
  );
}

function AndAnotherStarIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 32 32">
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stop-color="black"/>
          <stop offset="50%" stop-color="white"/>
        </linearGradient>
      </defs>
      <path fill="url(#grad)" stroke="black" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>

    </svg>
  );
}

export default StarIcon;
