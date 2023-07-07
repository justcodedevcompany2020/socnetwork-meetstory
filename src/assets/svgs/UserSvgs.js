import { Path, Rect, Svg } from "react-native-svg"

export const MessageSvg = () =>{
    return <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect x={1} y={1} width={32} height={32} rx={16} fill="#fff" />
    <Path
      d="M22.923 11H11.077A1.08 1.08 0 0010 12.083v9.209a1.08 1.08 0 001.077 1.083h11.846A1.08 1.08 0 0024 21.292v-9.209A1.08 1.08 0 0022.923 11z"
      stroke="#5691C8"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12.354l6.31 5.417a1.073 1.073 0 001.38 0L24 12.354"
      stroke="#5691C8"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={1}
      y={1}
      width={32}
      height={32}
      rx={16}
      stroke="#ABCEF0"
      strokeWidth={2}
    />
  </Svg>
}