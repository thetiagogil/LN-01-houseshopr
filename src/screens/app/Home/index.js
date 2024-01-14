import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../../../data/categories.js';
import { products } from '../../../data/products.js';
import Header from '../../../components/Header/index.js';
import CategoryBox from '../../../components/CategoryBox/index.js';
import ProductHomeItem from '../../../components/ProductHomeItem/index.js';


const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                onPress={() => { setSelectedCategory(item?.id) }}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}
            />
        )
    }

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails", { product })
        }

        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch keyword={keyword} onSearch={setKeyword} title={"Find All You Need"} />

                <FlatList
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => String(item.id)}
                />

                <FlatList
                    style={styles.productsList}
                    numColumns={2}
                    data={filteredProducts}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home);