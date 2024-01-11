import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const MyListings = ({ navigation }: any): React.JSX.Element => {
    const renderItem = ({ item }: any): React.JSX.Element => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", { product: item })
        }

        return (
            <FavouriteItem
                icon={require("../../../assets/delete.png")}
                onPress={onProductPress}
                {...item}
            />
        )
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title={"MyListings"} showBack onBackPress={goBack} />

                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item): any => String(item.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(MyListings);