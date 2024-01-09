import React from "react"
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles"
import Button from "../../../components/Button";

const Splash = ({ navigation }: any): React.JSX.Element => {
    const onSignup = (): any => {
        navigation.navigate("Signup")
    }

    const onLogin = (): any => {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash_image.png")} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button onPress={onSignup} title={"Sign Up"} />
            </View>

            <Pressable onPress={onLogin} hitSlop={10}>
                <Text style={styles.footerText}>Log In</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default React.memo(Splash);