import React from "react"
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const GoogleLogin = (): React.JSX.Element => {
    return (
        <TouchableOpacity style={styles.container} hitSlop={10} activeOpacity={0.5}>
            <Image style={styles.image} source={require("../../assets/google.png")} />
        </TouchableOpacity>
    );
}

export default React.memo(GoogleLogin);