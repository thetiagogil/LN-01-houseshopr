import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors.tsx"

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: "500"
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        color: colors.black,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate: "90deg"}]
    },
    placeholder: {
        color: colors.lightGrey,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flex: 1
    }
})
