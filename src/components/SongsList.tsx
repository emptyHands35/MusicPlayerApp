import { FlatList, StyleSheet, ActivityIndicator, View, Text, ListRenderItem, SafeAreaView } from 'react-native'
import React from 'react'
import CardItem from './CardItem'
import Colors from '../theme/Colors'
import TrackPlayer from 'react-native-track-player'
import { ALBUMLIST_PROPS } from '../types'



const AlbumList = ({ data, isLoading, currentMusic, searchValue, setShowPlayer, setCurrentMusic }: ALBUMLIST_PROPS) => {

    const onSongSelectHandler = async (trackName: string, previewUrl: string, trackId: string) => {

        TrackPlayer.reset()
        setShowPlayer(true)
        let selected = {
            id: trackId,
            title: trackName,
            url: previewUrl,
        }
        setCurrentMusic(selected);
        let tracks = [selected]
        await TrackPlayer.add(tracks);
        TrackPlayer.play()

    }

    const renderItem: ListRenderItem<any> = ({ item }) => {
        const { artworkUrl30, trackName, artistName, collectionName, previewUrl, trackId } = item

        return <CardItem
            onPress={onSongSelectHandler}
            artwork={artworkUrl30}
            trackName={trackName}
            artistName={artistName}
            collectionName={collectionName}
            previewUrl={previewUrl}
            trackId={trackId}
            currentMusic={currentMusic}
        />
    }

    return (
        <>
            <SafeAreaView>
                {isLoading && <ActivityIndicator style={styles.indicator} size="small" color={Colors.textColor} animating={isLoading} />
                }

                <FlatList
                    style={styles.container}
                    data={data}
                    keyExtractor={item => item.trackId}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => {

                        return (<View style={{ height: 2, backgroundColor: Colors.primaryBackground }} />);
                    }}
                    ListEmptyComponent={() => {
                        if (searchValue && data?.length <= 0) {
                            return (
                                <View style={styles.container}>
                                    <Text style={styles.text}>No Result Found</Text>
                                    <Text style={styles.title}>Try another keyword</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.container}>
                                <Text style={styles.text}>Search your artist</Text>
                                <Text style={styles.title}>To start listening your music</Text>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        </>
    )
}

export default AlbumList

const styles = StyleSheet.create({
    title: {
        color: Colors.textColor
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: 'red'
    },
    container: {
        marginTop: 20, marginBottom: 100
    },
    indicator: {
        marginVertical: Colors.spacing
    }
})