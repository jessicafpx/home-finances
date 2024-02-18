import React from "react";

export const Loading = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="40"
    height="45"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    style={{ background: "0" }}
  >
    <g>
      <g transform="translate(80,50) rotate(0)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity="1"
          transform="scale(1.03426 1.03426)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(71.21320343559643,71.21320343559643) rotate(45)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".875"
          transform="scale(1.04676 1.04676)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(50,80) rotate(90)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".75"
          transform="scale(1.05926 1.05926)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(28.786796564403577,71.21320343559643) rotate(135)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".625"
          transform="scale(1.07176 1.07176)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(20,50.00000000000001) rotate(180)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".5"
          transform="scale(1.08426 1.08426)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(28.78679656440357,28.786796564403577) rotate(225)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".375"
          transform="scale(1.09676 1.09676)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(49.99999999999999,20) rotate(270)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".25"
          transform="scale(1.00926 1.00926)"
        >
          <animateTransform
            attributeName="transform"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
    <g>
      <g transform="translate(71.21320343559643,28.78679656440357) rotate(315)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#FF5B5B"
          fillOpacity=".125"
          transform="scale(1.02176 1.02176)"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.1 1.1;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </g>
  </svg>
));

Loading.displayName = "Loading";
