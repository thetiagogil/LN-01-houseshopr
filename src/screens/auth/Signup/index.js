import React, { useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles.tsx"
import AuthHeader from "../../../components/AuthHeader/index.tsx";
import Input from "../../../components/Input/index.tsx";
import Checkbox from "../../../components/Checkbox/index.tsx";
import Button from "../../../components/Button/index.tsx";
import Separator from "../../../components/Separator/index.tsx";
import GoogleLogin from "../../../components/GoogleLogin/index.tsx";

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const onLogIn = () => {
        navigation.navigate("Login")
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title={"Sign Up"} />

                <Input label={"Name"} placeholder={"Tiago Gil"} />
                <Input label={"E-mail"} placeholder={"example@gmail.com"} />
                <Input label={"Password"} placeholder={"********"} isPassword={true} />

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>

                <Button style={styles.button} title={"Sign Up"} />

                <Separator text={"Or sign up with"} />

                <GoogleLogin />

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text style={styles.footerLink} onPress={onLogIn}> Log In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default React.memo(Signup);