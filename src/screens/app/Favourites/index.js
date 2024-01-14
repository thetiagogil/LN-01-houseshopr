import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const Favorites = ({ navigation }) => {
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", { product: item })
        }

        return (
            <FavouriteItem
                onPress={onProductPress}
                {...item}
            />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title={"Favourites"} />

                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites);