import React from "react"
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Checkbox = ({ checked, onCheck }: any): React.JSX.Element => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onCheck(!checked)} hitSlop={20} activeOpacity={0.5}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require("../../assets/check.png")} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

export default Checkbox;