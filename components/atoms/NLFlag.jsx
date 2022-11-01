import * as React from "react";

export default function NLFlag(props) {
  return (
    <svg
      width={30}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_179_1182)">
        <path d="M0 0h30v21H0V0z" fill="#fff" />
        <path d="M0 0h30v7H0V0z" fill="#CD1F2A" />
        <path d="M0 13.908h30v7H0v-7z" fill="#1D4185" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_179_1182">
          <path fill="#fff" d="M0 0h30v21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
