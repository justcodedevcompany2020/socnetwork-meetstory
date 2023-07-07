import { Circle, Path, Rect, Svg } from "react-native-svg"

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

export const WallSvg = () =>{
  return <Svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M19.5 20.571h-15a2.786 2.786 0 01-2.78-2.628l-.005-.157V5.357A1.929 1.929 0 013.51 3.433l.132-.004H16.93a1.929 1.929 0 011.924 1.796l.005.132V6h1.5a1.929 1.929 0 011.924 1.797l.004.132v9.857a2.786 2.786 0 01-2.628 2.781l-.157.004zm-15-1.285h15a1.5 1.5 0 001.495-1.378l.006-.122V7.929a.643.643 0 00-.556-.637l-.087-.006h-1.5V16.5a.643.643 0 01-.556.637l-.087.006a.643.643 0 01-.637-.556l-.006-.087V5.357a.643.643 0 00-.555-.637l-.088-.006H3.643a.643.643 0 00-.636.556L3 5.357v12.429a1.5 1.5 0 001.376 1.495l.124.005zm4.283-8.14c.591 0 1.071.48 1.071 1.072v2.996c0 .592-.48 1.072-1.071 1.072H5.786c-.591 0-1.071-.48-1.071-1.072v-2.996c0-.592.48-1.072 1.071-1.072h2.997zM12.215 15h2.996a.643.643 0 01.088 1.28l-.088.006h-2.996a.643.643 0 01-.088-1.28l.088-.006zm-3.646-2.568H6.001V15h2.568v-2.568zm3.646-1.286h2.996a.643.643 0 01.088 1.28l-.088.006h-2.996a.642.642 0 01-.088-1.28l.088-.006zm-6.86-3.863h9.856a.643.643 0 01.088 1.28l-.088.006H5.354a.643.643 0 01-.086-1.28l.086-.006z"
    fill="#fff"
  />
</Svg>
}

export const PhotoSvg = () =>{
  return <Svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M15 8h.01M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Path
    d="M3 16l5-5c.928-.893 2.072-.893 3 0l5 5"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Path
    d="M14 14l1-1c.928-.893 2.072-.893 3 0l3 3"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Circle cx={15.5} cy={7.5} r={1.5} fill="#fff" />
</Svg>
}

export const Friends = () =>{
  return <Svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M9.631 10.579a3.79 3.79 0 100-7.579 3.79 3.79 0 000 7.579z"
    stroke="#fff"
    strokeWidth={1.5}
  />
  <Path
    d="M15.316 9.632a2.842 2.842 0 100-5.685"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
  />
  <Path
    d="M9.632 21c3.662 0 6.631-1.697 6.631-3.79 0-2.092-2.969-3.789-6.631-3.789-3.663 0-6.632 1.697-6.632 3.79C3 19.302 5.97 21 9.632 21z"
    stroke="#fff"
    strokeWidth={1.5}
  />
  <Path
    d="M18.158 14.368C19.82 14.733 21 15.656 21 16.737c0 .976-.96 1.822-2.368 2.245"
    stroke="#fff"
    strokeWidth={1.5}
    strokeLinecap="round"
  />
</Svg>
}