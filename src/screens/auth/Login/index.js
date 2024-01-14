import React from "react"
import { ScrollView, Text } from "react-native";
import { styles } from "./styles.tsx"
import AuthHeader from "../../../components/AuthHeader/index.tsx";
import Input from "../../../components/Input/index.tsx";
import Button from "../../../components/Button/index.tsx";
import Separator from "../../../components/Separator/index.tsx";
import GoogleLogin from "../../../components/GoogleLogin/index.tsx";
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