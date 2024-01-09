import React, { useState } from "react"
import { Dimensions, FlatList, Image, View } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window")

const ImageCarousel = ({ images }: any): React.JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScrollEnd = (event: any) => {
        const horizontalOffset = event.nativeEvent.contentOffset.x
        const index = Math.round(horizontalOffset / width)
        console.log("index :>>", horizontalOffset)

        setActiveIndex(index)
    }

    const renderImage = ({ item }: any): React.JSX.Element => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        )
    }

    return (
        <View>
            <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd} />

            <View style={styles.pagination}>
                {images?.map((_: any, index: any) => (
                    <View style={[styles.paginationLine, index === activeIndex ? styles.activeLine : {}]} key={index} />
                ))}
            </View>
        </View>
    )
}

export default React.memo(ImageCarousel)