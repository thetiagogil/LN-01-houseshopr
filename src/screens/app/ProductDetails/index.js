import React from 'react';
import { Image, Linking, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';


const ProductDetails = ({ navigation, route }) => {
    const { product } = route?.params || {}

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        // CONTACT BY PHONE
        const phone = "+351930000000"
        Linking.openURL(`tel: ${phone}`)

        // CONTACT BY EMAIL
        const email = "support@support.com"
        Linking.openURL(`mailto: ${email}`)
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>

                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{ uri: product?.image }} />
                )}


                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>

                <TouchableOpacity onPress={onBackPress} style={styles.backContainer} activeOpacity={0.8}>
                    <Image style={styles.backIcon} source={require("../../../assets/back.png")} />
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require("../../../assets/bookmark_blue.png")} />
                </Pressable>
                <Button onPress={onContact} title={"Contact Seller"} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);