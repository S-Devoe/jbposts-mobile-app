import Svg, { Path, Circle, G, Defs,  } from "react-native-svg";

export default function AddIcon(props) {
  return (
    <Svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1_1556)">
        <Circle cx="80" cy="76" r="18" fill="#0D0140" />
      </G>
      <Path
        d="M80 71V81"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M85 76L75 76"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Defs>
        <filter
          id="filter0_d_1_1556"
          x="0"
          y="0"
          width="160"
          height="160"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="31" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.600625 0 0 0 0 0.670375 0 0 0 0 0.775 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1556"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1556"
            result="shape"
          />
        </filter>
      </Defs>
    </Svg>
  );
}
