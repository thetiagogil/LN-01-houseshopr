import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const Favorites = (): React.JSX.Element => {
    const renderItem = ({ item }: any): React.JSX.Element => {
        return (
            <FavouriteItem
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
                    keyExtractor={(item): any => String(item.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites);