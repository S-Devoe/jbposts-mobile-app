import Svg, { Path, Circle } from "react-native-svg";

export default function ConnectIcon(props) {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.6594 7.05835C17.4774 8.13065 19.4797 10.8573 19.4797 14.0516C19.4797 14.4709 19.4452 14.8821 19.3789 15.2826M9.34027 7.05835C6.52228 8.13065 4.51995 10.8573 4.51995 14.0516C4.51995 14.4709 4.55445 14.8821 4.62076 15.2826M16.4637 20.054C15.2177 20.9822 13.6729 21.5315 11.9998 21.5315C10.3267 21.5315 8.78192 20.9822 7.53594 20.054"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5"}
      />
      <Circle
        cx="12.0001"
        cy="6.34627"
        r="2.7989"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5"}
      />
      <Circle
        cx="18.4478"
        cy="17.9825"
        r="2.7989"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5"}
      />
      <Circle
        cx="5.54888"
        cy="17.9825"
        r="2.7989"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5"}
      />
    </Svg>
  );
}
