import { FlatList, StyleSheet, ActivityIndicator, View, Text, ListRenderItem, SafeAreaView } from 'react-native'
import React from 'react'
import CardItem from './CardItem'
import Colors from '../theme/Colors'
import TrackPlayer from 'react-native-track-player'
import { SONGLIST_PROPS } from '../types'


const SongsList = ({ data, isLoading, currentMusic, searchValue, setShowPlayer, setCurrentMusic }: SONGLIST_PROPS) => {

    //function that handles onCard Item press and gets trackName, previewUrl and track ID as an argument
    const onSongSelectHandler = async (trackName: string, previewUrl: string, trackId: string) => {
        TrackPlayer.reset() //resetting the player if song was previously added
        setShowPlayer(true) //showing player at the bottom of the screen

        let selected = {
            id: trackId,
            title: trackName,
            url: previewUrl,
        }
        setCurrentMusic(selected); //setting current song
        await TrackPlayer.add([selected]); //adding selected song to play
        TrackPlayer.play() //playing the selected song
    }

    //Flatlist render items function that renders CardItem for each object. CardItem displays image, song name, artist name and album
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
                {/* When songs are not loaded a spinner is displayed */}
                {isLoading && <ActivityIndicator style={styles.indicator} size="small" color={Colors.textColor} animating={isLoading} />
                }

                {/* Flatlist to loop over each objects form data array and renders card Item*/}
                <FlatList
                    style={styles.container}
                    data={data}
                    keyExtractor={item => item.trackId}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => {
                        return (<View style={{ height: 2, backgroundColor: Colors.primaryBackground }} />);
                    }}
                    ListEmptyComponent={() => {
                        // When search results are not found below will return
                        if (searchValue && data?.length <= 0) {
                            return (
                                <View style={styles.container}>
                                    <Text style={styles.text}>No Result Found</Text>
                                    <Text style={styles.title}>Try another keyword</Text>
                                </View>
                            );
                        }
                        // Prompt message to search for artists when app is first opened
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

export default SongsList

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