import React, { useState } from "react"
import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { categories } from "../../data/categories";

const Input = ({ label, type, isPassword, value, onChangeText, style, placeholder, ...props }: any): React.JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible]: any = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const onSelect = (oneCat: any) => {
        onChangeText(oneCat)
        setIsPickerModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === "picker" ? (
                <Pressable onPress={() => setIsPickerModalVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text
                            style={[styles.input, style]}
                        >{value?.title}</Text>
                    ) : (
                        <Text
                            style={[styles.placeholder, style]}
                        >{placeholder}</Text>
                    )}

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

            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { setIsPickerModalVisible(false) }}
                    style={styles.modalWrapper}
                >
                    <TouchableOpacity style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select options</Text>

                        {categories.map((oneCat: any) => {
                            if (!oneCat || !oneCat.id || oneCat.id === 0) {
                                return null
                            }

                            const selected = value?.id === oneCat?.id

                            return (
                                <Text
                                    onPress={() => { onSelect(oneCat) }}
                                    style={[styles.optionText, selected ? styles.selectedOption : {}]}
                                    key={oneCat.id}
                                >
                                    {oneCat.title}
                                </Text>
                            )
                        })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

export default React.memo(Input);