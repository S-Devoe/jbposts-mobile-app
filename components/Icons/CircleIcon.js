import Svg, { Circle } from "react-native-svg";

export default function CircleIcon(props) {
  return (
    <Svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="3.5" cy="3.5" r="3.5" fill="#0D0140" />
    </Svg>
  );
}
