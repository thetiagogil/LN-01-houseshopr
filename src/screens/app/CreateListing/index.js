import React, { useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// import { launchImageLibrary } from 'react-native-image-picker';

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const onBackPress = () => {
        navigation.goBack()
    }

    // REACT-NATIVE-IMAGE-PICKER IS NOT WORKING WITH ANDROID EMULATOR SO I COULDN'T USE THIS METHOD
    /*     const uploadNewImage = async () => {
            setLoading(true)
        
            const options = {
            };
    
            const result = await launchImageLibrary(options)

            if(result?.assets?.length) {
                setImages((list) => ({...list, ...result?.assets}))
                setLoading(false)
            }
        } */

    // INSTEAD I JUST USED THIS TO CHECK IF IMG IS CORRECT - DELETE THIS AFTER PROBLEM IS SOLVED
    const uploadNewImage = () => {
        setImages((list) => [
            ...list,
            { uri: "https://i.pinimg.com/736x/d8/da/9f/d8da9febad2d2bb1277bfa907fde481d.jpg" },
        ]);
    };

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter((img) => img?.Filename !== image.Filename)
            return filteredImages
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }))
    }



    return (
        <SafeAreaView>
            <Header showBack onBackPress={onBackPress} title={"Create a new listing"} />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior="position">
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map((image, index) => (
                            <View style={styles.imageContainer} key={index}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />

                                <Pressable hitSlop={20} onPress={() => { onDeleteImage(image) }}>
                                    <Image style={styles.delete} source={require("../../../assets/close.png")} />
                                </Pressable>
                            </View>
                        ))}

                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input
                        placeholder={"Listing Title"}
                        label={"Title"}
                        value={values.title}
                        onChangeText={(v) => { onChange(v, "title") }}
                    />

                    <Input
                        placeholder={"Selected Category"}
                        label={"Category"}
                        value={values.category}
                        onChangeText={(v) => { onChange(v, "category") }}
                        type="picker"
                    />

                    <Input
                        placeholder={"Enter price in EUR"}
                        label={"Price"}
                        value={values.price}
                        onChangeText={(v) => { onChange(v, "price") }}
                        keyboardType={"numeric"}
                    />

                    <Input
                        style={styles.textArea}
                        placeholder={"Tell us more..."}
                        label={"Description"}
                        value={values.description}
                        onChangeText={(v) => { onChange(v, "description") }}
                        multiline
                        textAlignVertical="top"
                    />
                    <Button title={"Submit"} sxtyle={styles.button} />

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);