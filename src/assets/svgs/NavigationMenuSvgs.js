import React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

export const SearchIcon = ({ focused }) => {
  return focused ? <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M24.5 24.5l-5.067-5.067m0 0a9.335 9.335 0 10-13.201-13.2 9.335 9.335 0 0013.201 13.2z"
      stroke="#5691C8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg> : <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M24.5 24.5l-5.067-5.067m0 0a9.335 9.335 0 10-13.201-13.2 9.335 9.335 0 0013.201 13.2z"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
};

export const HomeIcon = ({ focused }) => {
  return focused ? <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_35_3761)" fill="#5691C8">
      <Path d="M26.219 13.448L14.552 1.78a.778.778 0 00-1.097 0L1.79 13.448a.778.778 0 001.096 1.096l1.781-1.78 1.556-1.556L14 3.43l7.772 7.778 1.555 1.556 1.787 1.788a.778.778 0 001.097-1.096l.008-.008z" />
      <Path d="M21.777 13.813l1.556 1.556-.006-2.605-1.555-1.556.005 2.605z" />
      <Path d="M4.666 15.556v9.333a1.556 1.556 0 001.556 1.556h5.444v-7.778h4.667v7.777h5.444a1.556 1.556 0 001.556-1.555v-9.52l-1.556-1.556-.005-2.605L14 3.43l-7.778 7.778-1.556 1.556v2.792z" />
    </G>
    <Defs>
      <ClipPath id="clip0_35_3761">
        <Path fill="#fff" d="M0 0H28V28H0z" />
      </ClipPath>
    </Defs>
  </Svg> : <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_46_6040)" fill="#333">
      <Path d="M26.219 13.448L14.552 1.78a.778.778 0 00-1.097 0L1.79 13.448a.778.778 0 001.096 1.096L14 3.43l11.114 11.122a.778.778 0 001.097-1.096l.008-.008z" />
      <Path d="M21.777 24.889h-3.889V17.11H10.11v7.778H6.223V14l-1.556 1.556v9.333a1.555 1.555 0 001.556 1.555h5.444v-7.777h4.667v7.777h5.444a1.556 1.556 0 001.556-1.555v-9.52l-1.556-1.556V24.89z" />
    </G>
    <Defs>
      <ClipPath id="clip0_46_6040">
        <Path fill="#fff" d="M0 0H28V28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
}

export const NotificationsIcon = ({ focused }) => {
  return focused ? <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.744 23.616A5.402 5.402 0 0014 25.666a5.4 5.4 0 004.256-2.05 31.69 31.69 0 01-8.512 0zM21.875 10.5v.821c0 .986.28 1.95.807 2.77l1.293 2.01c1.18 1.837.279 4.332-1.773 4.912a30.092 30.092 0 01-16.404 0c-2.052-.58-2.952-3.076-1.773-4.912l1.293-2.01c.529-.827.81-1.788.808-2.77V10.5c0-4.51 3.526-8.167 7.874-8.167s7.875 3.657 7.875 8.167z"
      fill="#5691C8"
    />
  </Svg> : <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M21.875 11.328v-.822c0-4.514-3.528-8.173-7.875-8.173-4.347 0-7.875 3.659-7.875 8.173v.822a5.133 5.133 0 01-.807 2.771l-1.293 2.013c-1.18 1.837-.279 4.335 1.773 4.916a30.071 30.071 0 0016.404 0c2.052-.581 2.953-3.079 1.773-4.915L22.682 14.1a5.133 5.133 0 01-.808-2.77l.001-.002z"
      stroke="#333"
      strokeWidth={1.5}
    />
    <Path
      d="M8.75 22.167c.764 2.039 2.826 3.5 5.25 3.5s4.486-1.461 5.25-3.5"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
}

export const ProfileIcon = ({ focused }) => {
  return focused ? <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.995 11.667a4.667 4.667 0 100-9.334 4.667 4.667 0 000 9.334zM23.33 20.417c0 2.899 0 5.25-9.333 5.25s-9.333-2.351-9.333-5.25c0-2.9 4.18-5.25 9.333-5.25 5.155 0 9.334 2.35 9.334 5.25z"
      fill="#5691C8"
      stroke="#5691C8"
      strokeWidth={1.4}
    />
  </Svg> : <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.999 11.667a4.667 4.667 0 100-9.334 4.667 4.667 0 000 9.334zM23.333 20.417c0 2.899 0 5.25-9.334 5.25-9.333 0-9.333-2.351-9.333-5.25 0-2.9 4.179-5.25 9.333-5.25 5.155 0 9.334 2.35 9.334 5.25z"
      stroke="#333"
      strokeWidth={1.4}
    />
  </Svg>
}

