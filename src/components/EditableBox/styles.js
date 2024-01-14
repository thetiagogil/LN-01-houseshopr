import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginHorizontal: 10,
        marginVertical: 12,
        backgroundColor: colors.white,
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
    label: {
        color: colors.grey,
        fontSize: 12,
        marginBottom: 2
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: "500",
        paddingVertical: 2,
        paddingHorizontal: 0
    },
})
