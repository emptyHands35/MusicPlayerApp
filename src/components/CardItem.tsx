import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Colors from '../theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { CARDITEM_PROPS } from '../types'


const CardItem = ({ artwork, trackId, currentMusic, trackName, onPress, artistName, collectionName, previewUrl }: CARDITEM_PROPS) => {
    return (
        //When user presses the card item, it triggers a call back function which is on the parent component, CardItem Component receives onPress callback function as a prop.
        <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(trackName, previewUrl, trackId)}>
            {/* to display artwork from the songs */}
            <Image
                style={styles.cardImage}
                source={{
                    uri: artwork,
                }}
            />
            {/* to dispaly track, artist and album names */}
            <View style={styles.textBox}>
                <Text style={styles.primaryText}>{trackName}</Text>
                <Text style={styles.secondaryText}>{artistName}</Text>
                <Text style={styles.secondaryText}>{collectionName}</Text>
            </View>

            {/* //displays little playIcon on card item to identify which song is selected from the list*/}
            {trackId === currentMusic?.id ?
                <View style={styles.indicator}>
                    <Icon name="play-circle" size={25} color="#000" />
                </View> : null
            }
        </TouchableOpacity>
    )
}

export default memo(CardItem)

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Colors.spacing,
        position: 'relative',
    },
    cardImage: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
    },
    textBox: {
        marginLeft: Colors.spacing,
        width: '80%'
    },
    primaryText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textColor,
        lineHeight: 22,
    },
    secondaryText: {
        fontSize: 12,
        color: Colors.textColor,
        lineHeight: 14,
    },
    indicator: {
        position: 'absolute',
        right: Colors.spacing
    }

})