import React from "react"
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onPress }: any): React.JSX.Element => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} hitSlop={20} activeOpacity={0.5}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;