import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.0,
        elevation: 4,
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
        marginTop: 6
    },
    arrow: {
        width: 32,
        height: 32
    },
})
