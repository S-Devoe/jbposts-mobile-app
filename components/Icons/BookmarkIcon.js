import Svg, { Path } from "react-native-svg";

export default function BookmarkIcon(props) {
  return (
    <Svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.37687 15.3126L8.00001 15.0935L7.62314 15.3126L1.45431 18.8978C1.28764 18.9947 1.07869 18.8744 1.07869 18.6817V3.604C1.07869 2.36136 2.08605 1.354 3.32869 1.354H12.6713C13.914 1.354 14.9213 2.36136 14.9213 3.604V18.6817C14.9213 18.8744 14.7124 18.9947 14.5457 18.8978L8.37687 15.3126Z"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5" }
      />
    </Svg>
  );
}
