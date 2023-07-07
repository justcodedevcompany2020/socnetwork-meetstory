import React from 'react';
import { Rect, Svg, Path, G, ClipPath, Defs, Circle } from 'react-native-svg';
import { View } from "react-native";

export const UncheckedIcon = () => {
  return <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={20} height={20} rx={4} fill="#E2ECF6" />
  </Svg>
}

export const CheckedIcon = () => {
  return <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={20} height={20} rx={4} fill="#5691C8" />
    <Path
      d="M8.022 13.105L5.31 10.322a.762.762 0 00-.542-.232.744.744 0 00-.543.232.784.784 0 00-.226.557.801.801 0 00.226.556l3.246 3.332c.302.31.79.31 1.092 0l8.21-8.421A.783.783 0 0017 5.789a.8.8 0 00-.475-.729.745.745 0 00-.836.173l-7.667 7.872z"
      fill="#fff"
    />
  </Svg>
}

export const BlackArrowDown = () => {
  return <View style={{ width: 30 }}>
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.84 5.955a1.125 1.125 0 011.59 0L9 11.523l5.568-5.568a1.125 1.125 0 011.591 1.59L9.795 13.91a1.125 1.125 0 01-1.59 0L1.84 7.545a1.125 1.125 0 010-1.59z"
        fill="#333"
      />
    </Svg>
  </View>
}

export const BackIcon = () => {
  return <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.725 17.663a.937.937 0 01-1.325 0L5.088 12.35a.937.937 0 010-1.325L10.4 5.713a.938.938 0 011.325 1.325L8.013 10.75h9.3a.938.938 0 010 1.875h-9.3l3.712 3.712a.938.938 0 010 1.326z"
      fill="#fff"
    />
  </Svg>
}

export const BlueBackIcon = () => {
  return <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.724 17.663a.937.937 0 01-1.325 0L5.087 12.35a.937.937 0 010-1.325l5.312-5.312a.939.939 0 011.325 1.325L8.012 10.75h9.3a.938.938 0 010 1.875h-9.3l3.712 3.712a.938.938 0 010 1.326z"
      fill="#5691C8"
    />
  </Svg>
}

export const PlusIcon = () => {
  return <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect x={1} y={1} width={30} height={30} rx={15} fill="#5691C8" />
    <Path
      d="M22 17h-5v5a1 1 0 01-2 0v-5h-5a1 1 0 010-2h5v-5a1 1 0 012 0v5h5a1 1 0 010 2z"
      fill="#fff"
    />
    <Rect
      x={1}
      y={1}
      width={30}
      height={30}
      rx={15}
      stroke="#ABCEF0"
      strokeWidth={2}
    />
  </Svg>
}
export const PlusIconWhite = () => {
  return <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect x={1} y={1} width={30} height={30} rx={15} fill="#FFFFFF" />
    <Path
      d="M22 17h-5v5a1 1 0 01-2 0v-5h-5a1 1 0 010-2h5v-5a1 1 0 012 0v5h5a1 1 0 010 2z"
      fill="#32709F"
    />
    <Rect
      x={1}
      y={1}
      width={30}
      height={30}
      rx={15}
      stroke="#ABCEF0"
      strokeWidth={2}
    />
  </Svg>
}

export const OpenedEye = () => {
  return <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.389 8.772c-.025-.055-.62-1.377-1.944-2.7C13.68 4.306 11.453 3.374 9 3.374c-2.453 0-4.68.932-6.445 2.696C1.231 7.395.633 8.72.611 8.772a.563.563 0 000 .457c.025.056.62 1.376 1.944 2.7C4.32 13.693 6.547 14.625 9 14.625c2.453 0 4.68-.932 6.445-2.696 1.324-1.324 1.92-2.644 1.944-2.7a.562.562 0 000-.457zM9 13.5c-2.164 0-4.055-.787-5.62-2.338A9.383 9.383 0 011.758 9 9.375 9.375 0 013.38 6.838C4.945 5.287 6.836 4.5 9 4.5s4.055.787 5.62 2.338A9.385 9.385 0 0116.246 9c-.507.946-2.716 4.5-7.246 4.5zm0-7.875a3.375 3.375 0 100 6.75 3.375 3.375 0 000-6.75zm0 5.625a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
      fill="#333"
    />
  </Svg>
}


export const ClosedEye = () => {
  return <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M16.032 12.305a.565.565 0 01-.768-.211l-1.336-2.335a8.666 8.666 0 01-2.537 1.172l.413 2.476a.565.565 0 01-.554.655.562.562 0 01-.554-.47l-.406-2.431c-.855.119-1.723.119-2.579 0l-.405 2.431a.563.563 0 11-1.111-.185l.415-2.476a8.667 8.667 0 01-2.536-1.174l-1.332 2.337a.565.565 0 01-.98-.563l1.406-2.46a10.79 10.79 0 01-1.357-1.407.562.562 0 11.877-.703C3.855 8.405 5.897 10.125 9 10.125c3.104 0 5.146-1.722 6.313-3.164a.561.561 0 11.875.703c-.41.509-.863.98-1.357 1.406l1.406 2.461a.563.563 0 01-.205.774z"
      fill="#333"
    />
  </Svg>
}

export const BlackBackIcon = () => {
  return <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.724 17.663a.937.937 0 01-1.325 0L5.087 12.35a.937.937 0 010-1.325l5.312-5.312a.939.939 0 011.325 1.325L8.012 10.75h9.3a.938.938 0 010 1.875h-9.3l3.712 3.712a.938.938 0 010 1.326z"
      fill="#333"
    />
  </Svg>
}

export const FilterIcon = () => {
  return <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_48_5057)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 010 2h-1.17a3 3 0 01-5.66 0H4a1 1 0 010-2h9.17A3.001 3.001 0 0116 15zm0 2a1 1 0 100 2 1 1 0 000-2zM8 9a3 3 0 012.762 1.828l.067.172H20a1 1 0 01.117 1.993L20 13h-9.17a3 3 0 01-5.592.172L5.17 13H4a1 1 0 01-.117-1.993L4 11h1.17A3 3 0 018 9zm0 2a1 1 0 100 2 1 1 0 000-2zm8-8c1.306 0 2.418.835 2.83 2H20a1 1 0 110 2h-1.17a3 3 0 01-5.66 0H4a1 1 0 010-2h9.17A3.001 3.001 0 0116 3zm0 2a1 1 0 100 2 1 1 0 000-2z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_48_5057">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
}

export const SearchIcon = () => {
  return <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.5 17.5l-3.619-3.62m0 0A6.665 6.665 0 009.167 2.5a6.667 6.667 0 104.714 11.38z"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
}

export const MoreIcon = () => {
  return <Svg
    width={21}
    height={5}
    viewBox="0 0 21 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#5691C8" />
    <Circle cx={10.5} cy={2.5} r={2.5} fill="#5691C8" />
    <Circle cx={18.5} cy={2.5} r={2.5} fill="#5691C8" />
  </Svg>
}