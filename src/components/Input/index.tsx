import React, { useState } from "react"
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors.tsx"

const Input = ({ label, placeholder, isPassword, value, onChangeText }: any): React.JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={styles.input} placeholder={placeholder} placeholderTextColor={colors.grey} />

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} />
                    </Pressable>) : null}
            </View>
        </View>
    );
}

export default React.memo(Input);