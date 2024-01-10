import React, { useState } from "react"
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ label, type, isPassword, value, onChangeText, style, placeholder, ...props }: any): React.JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === "picker" ? (
                <Pressable style={styles.inputContainer}>
                    <Text
                        style={[styles.placeholder, style]}
                    >{placeholder}</Text>

                    <Image
                        style={styles.arrow}
                        source={require("../../assets/arrow.png")}
                    />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>

                    <TextInput
                        value={value}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        secureTextEntry={isPassword && !isPasswordVisible}
                        style={[styles.input, style]}
                        {...props}
                    />

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} />
                        </Pressable>) : null}
                </View>
            )}

        </View>
    );
}

export default React.memo(Input);