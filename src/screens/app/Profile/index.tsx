import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

const Profile = ({ navigation }: any): React.JSX.Element => {
    const num = 10

    const onLogout = () => {
        console.log("user is logged out")
    }

    const onSettingsPress = () => {
        navigation.navigate("Settings")
    }

    const onNewListingPress = () => {
        navigation.navigate("CreateListing")
    }

    return (
        <SafeAreaView style={styles.safe}>
            <Header title={"Profile"} showLogout onLogout={onLogout} />

            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User Name</Text>
                    <Text style={styles.email}>User E-mail</Text>

                    <ListItem title={"My Listings"} subtitle={`You have ${num} of listings`} />
                    <ListItem onPress={onSettingsPress} title={"Settings"} subtitle={"Account, FAQ, Contact"} />
                </View>

                <Button onPress={onNewListingPress} style={styles.button} title={"Add New Listing"} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile);