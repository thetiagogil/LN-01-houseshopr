import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors.js"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRadius: 8,
        flex: 1
    },
    title: {
        color: colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
})
