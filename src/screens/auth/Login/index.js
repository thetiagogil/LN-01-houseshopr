import React from "react"
import { ScrollView, Text } from "react-native";
import { styles } from "./styles.js"
import AuthHeader from "../../../components/AuthHeader/index.js";
import Input from "../../../components/Input/index.js";
import Button from "../../../components/Button/index.js";
import Separator from "../../../components/Separator/index.js";
import GoogleLogin from "../../../components/GoogleLogin/index.js";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate("Signup")
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title={"Log In"} />

                <Input label={"E-mail"} placeholder={"example@gmail.com"} />
                <Input label={"Password"} placeholder={"********"} isPassword={true} />

                <Button style={styles.button} title={"Log In"} />

                <Separator text={"Or log in with"} />

                <GoogleLogin />

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text style={styles.footerLink} onPress={onSignUp}> Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default React.memo(Login);