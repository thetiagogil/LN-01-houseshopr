import React, { useState } from "react"
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles.tsx"
import AuthHeader from "../../../components/AuthHeader/index.tsx";
import Input from "../../../components/Input/index.tsx";
import Button from "../../../components/Button/index.tsx";
import Separator from "../../../components/Separator/index.tsx";
import GoogleLogin from "../../../components/GoogleLogin/index.tsx";

const Login = (): React.JSX.Element => {
    const onLogIn = () => {
        console.log("you pressed sign up button")
    }

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader title={"Log In"} />

            <Input label={"E-mail"} placeholder={"example@gmail.com"} />
            <Input label={"Password"} placeholder={"********"} isPassword={true} />

            <Button style={styles.button} title={"Log In"} />

            <Separator text={"Or log in with"} />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink} onPress={onLogIn}> Sign Up</Text>
            </Text>
        </SafeAreaView>
    );
}

export default React.memo(Login);