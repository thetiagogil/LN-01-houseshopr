import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
// import { launchImageLibrary } from 'react-native-image-picker';

const CreateListing = ({ navigation }: any): React.JSX.Element => {
    const [images, setImages]: any = useState([]);
    const [values, setValues]: any = useState({});
    const [loading, setLoading] = useState(false);

    const onBackPress = () => {
        navigation.goBack()
    }

    /*     const uploadNewImage = async () => {
            setLoading(true)
        
            const options: any = {
            };
    
            const result = await launchImageLibrary(options)

            if(result?.assets?.length) {
                setImages((list: any) => ({...list, ...result?.assets}))
                setLoading(false)
            }
        } */

    const onDeleteImage = (image: any) => {
        setImages((list: any) => {
            const filteredImages = list.filter((img: any) => img?.Filename !== image.Filename)
            return filteredImages
        })
    }

    const onChange = (value: any, key: any) => {
        setValues((val: any) => ({ ...val, [key]: value }))
    }

    // DELETE THIS AFTER PROBLEM IS SOLVED
    const uploadNewImage = () => {
        setImages((list: any) => [
            ...list,
            { uri: "https://i.pinimg.com/736x/d8/da/9f/d8da9febad2d2bb1277bfa907fde481d.jpg" },
        ]);
    };

    return (
        <SafeAreaView>
            <Header showBack onBackPress={onBackPress} title={"Create a new listing"} />

            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.container}>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map((image: any, index: any) => (
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
                        onChangeText={(v: any) => { onChange(v, "title") }}
                    />

                    <Input
                        placeholder={"Selected Category"}
                        label={"Category"}
                        value={values.category}
                        onChangeText={(v: any) => { onChange(v, "category") }}
                        type="picker"
                    />

                    <Input
                        placeholder={"Enter price in EUR"}
                        label={"Price"}
                        value={values.price}
                        onChangeText={(v: any) => { onChange(v, "price") }}
                        keyboardType={"numeric"}
                    />

                    <Input
                        style={styles.textArea}
                        placeholder={"Tell us more..."}
                        label={"Description"}
                        value={values.description}
                        onChangeText={(v: any) => { onChange(v, "description") }}
                        multiline
                        textAlignVertical="top"
                    />

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);