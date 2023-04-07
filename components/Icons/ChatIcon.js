import Svg, { Path, Circle } from "react-native-svg";

export default function ChatIcon(props) {
  return (
    <Svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0.75 3.51172C0.75 2.26908 1.75736 1.26172 3 1.26172H17C18.2426 1.26172 19.25 2.26908 19.25 3.51172V12.5117C19.25 13.7544 18.2426 14.7617 17 14.7617H13.2071C12.8756 14.7617 12.5576 14.8934 12.3232 15.1278L10 17.4511L7.67678 15.1278C7.44236 14.8934 7.12441 14.7617 6.79289 14.7617H3C1.75736 14.7617 0.75 13.7544 0.75 12.5117V3.51172Z"
        stroke={props.stroke || "#A49EB5"}
        stroke-width={props.strokeWidth || "1.5"}
      />
    </Svg>
  );
}
