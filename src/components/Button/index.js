import React from "react"
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} hitSlop={10} activeOpacity={0.5}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(Button);