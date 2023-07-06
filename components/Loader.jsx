import React from "react";

const Loader = () => {
  return (
    <>
      <svg
        class="whole"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loader">
          <animateTransform
            xlink:href="#loader"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
            restart="always"
          />
          <path
            class="a"
            opacity="0.2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z"
            fill="#66B1DC"
          />
          <path
            class="b"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 50C100 22.3858 77.6142 0 50 0V10C72.0914 10 90 27.9086 90 50H100Z"
            fill="#66B1DC"
          />
        </g>
      </svg>
    </>
  );
};

export default Loader;