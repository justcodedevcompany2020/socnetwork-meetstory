import React from "react";
import { View } from "react-native";
import { Svg, Rect, Path, Circle } from "react-native-svg";



export const UnlikedIcon = () => {
    return <View style={{ marginHorizontal: 5 }}>
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M16.688 3c-1.936 0-3.631.833-4.688 2.24C10.943 3.832 9.248 3 7.312 3A5.82 5.82 0 001.5 8.813c0 6.562 9.73 11.874 10.145 12.093a.75.75 0 00.71 0c.415-.22 10.145-5.531 10.145-12.093A5.819 5.819 0 0016.687 3zM12 19.387c-1.712-.997-9-5.541-9-10.575A4.318 4.318 0 017.313 4.5c1.823 0 3.354.971 3.993 2.531a.75.75 0 001.388 0c.64-1.563 2.17-2.531 3.993-2.531A4.318 4.318 0 0121 8.813c0 5.025-7.29 9.576-9 10.574z"
                fill="#333"
            />
        </Svg>
    </View>
}

export const CommentIcon = () => {
    return <View style={{ marginHorizontal: 5 }}>
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M12 21a9 9 0 10-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1z"
                stroke="#333"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    </View>
}

export const ShareIcon = () => {
    return <View style={{ marginHorizontal: 5 }}>
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M20 11l-6.4-7v3.5C10.4 7.5 4 9.6 4 18c0-1.167 1.92-3.5 9.6-3.5V18l6.4-7z"
                stroke="#333"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    </View>
}

export const LikedIcon = () => {
    return <View style={{ marginHorizontal: 5 }}>
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M16.688 3c-1.936 0-3.631.833-4.688 2.24C10.943 3.832 9.248 3 7.312 3A5.82 5.82 0 001.5 8.813c0 6.562 9.73 11.874 10.145 12.093a.75.75 0 00.71 0c.415-.22 10.145-5.531 10.145-12.093A5.819 5.819 0 0016.687 3z"
                fill="#5691C8"
            />
        </Svg>
    </View>
}

export const CommentSettingsIcon = () => {
    return <Svg
        width={31}
        height={20}
        viewBox="0 0 31 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={7.5} cy={9.5} r={2.5} fill="#5691C8" />
        <Circle cx={15.5} cy={9.5} r={2.5} fill="#5691C8" />
        <Circle cx={23.5} cy={9.5} r={2.5} fill="#5691C8" />
    </Svg>
}

export const UnlikedIcon16 = () => {
    return <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M11.125 2C9.835 2 8.705 2.555 8 3.493 7.296 2.555 6.166 2 4.875 2A3.88 3.88 0 001 5.875c0 4.375 6.487 7.916 6.763 8.063a.5.5 0 00.474 0C8.513 13.79 15 10.25 15 5.874A3.88 3.88 0 0011.125 2zM8 12.925c-1.141-.665-6-3.694-6-7.05A2.879 2.879 0 014.875 3c1.216 0 2.236.647 2.662 1.688a.5.5 0 00.926 0C8.889 3.646 9.909 3 11.125 3A2.879 2.879 0 0114 5.875c0 3.35-4.86 6.384-6 7.05z"
            fill="#333"
        />
    </Svg>
}

export const CommentIcon16 = () => {
    return <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M8 14a6 6 0 10-5.333-3.249L2 14l3.249-.667C6.073 13.76 7.009 14 8 14z"
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
}