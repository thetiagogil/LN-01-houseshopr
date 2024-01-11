import React, { useState } from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';

const Settings = ({ navigation }: any): React.JSX.Element => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: "User", email: "user@email.com" });

    const onEditPress = () => {
        setEditing(true)
    }

    const onSave = () => {
        setEditing(false)
    }

    const onChange = (key: any, value: any) => {
        setValues(e => ({ ...e, [key]: value }))
    }

    const onItemPress = () => {
        Linking.openURL("https://google.com")
    }

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showBack onBackPress={onBackPress} title={"Settings"} />

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require("../../../assets/edit.png")} />
                    </Pressable>
                </View>

                <EditableBox
                    label={"Name"}
                    onChangeText={(e: any) => onChange("name", e)}
                    value={values.name}
                    editable={editing} />

                <EditableBox
                    label={"E-mail"}
                    onChangeText={(e: any) => onChange("email", e)}
                    value={values.email}
                    editable={editing} />

                {editing ? (
                    <Button style={styles.button} title={"Save"} onPress={onSave} />
                ) : null}

                <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title={"FAQ"} />
                <ListItem onPress={onItemPress} style={styles.item} title={"Contact Us"} />
                <ListItem onPress={onItemPress} style={styles.item} title={"Privacy & Terms"} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);