import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const CreateListing = ({ navigation }: any): React.JSX.Element => {
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <Header showBack onBackPress={onBackPress} title={"Create a new listing"} />

            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>

                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);