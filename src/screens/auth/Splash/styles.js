import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors.js"

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    image: {
        width: "100%",
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        color: colors.black,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline"
    },
    footerText: {
        color: colors.blue,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%"
    }
})
