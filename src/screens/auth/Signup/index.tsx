import React, { useState } from "react"
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles.tsx"
import AuthHeader from "../../../components/AuthHeader/index.tsx";
import Input from "../../../components/Input/index.tsx";
import Checkbox from "../../../components/Checkbox/index.tsx";

const Splash = (): React.JSX.Element => {
    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader title={"Sign Up"} />

            <Input label={"Name"} placeholder={"Tiago Gil"} />
            <Input label={"E-mail"} placeholder={"example@gmail.com"} />
            <Input label={"Password"} placeholder={"********"} isPassword={true} />

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
        </SafeAreaView>
    );
}

export default Splash;