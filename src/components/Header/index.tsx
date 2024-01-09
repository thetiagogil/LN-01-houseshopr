import React, { useState } from "react"
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input";

const Header = ({ title, onBackPress, onLogout, showSearch, showLoggout, showBack, onSearch, keyword }: any): React.JSX.Element => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(showSearchInput => !showSearchInput)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require("../../assets/back.png")} />
                    </Pressable>) :

                    showSearch ? (
                        <Pressable hitSlop={20} onPress={onSearchClick}>
                            <Image style={styles.icon} source={require("../../assets/search.png")} />
                        </Pressable>
                    ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLoggout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require("../../assets/logout.png")} />
                    </Pressable>
                ) : <View style={styles.space} />}

            </View>
            
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder={"Type your keyboard..."} />
            ) : null}
        </View>
    );
}

export default React.memo(Header);