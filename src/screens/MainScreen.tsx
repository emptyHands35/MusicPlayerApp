import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SongsList, SearchBar, MusicPlayer } from '../components'
import Colors from '../theme/Colors'
import useFetchSongs from '../hooks/useFetchSongs'
import TrackPlayer from 'react-native-track-player'
import { CURRENT_MUSIC } from '../types'


const MainScreen = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [searchResults, setSearchResults] = useState()
    const [showPlayer, setShowPlayer] = useState<boolean>(false)
    const [currentMusic, setCurrentMusic] = useState<CURRENT_MUSIC>()

    const { data, isLoading, error } = useFetchSongs(searchValue)

    useEffect(() => {
        setSearchResults(data)
    }, [data])

    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setUpTrackPlayer()
    }, []);

    return (
        <>
            <View style={styles.container}>
                <SearchBar value={searchValue} setValue={setSearchValue} onPress={() => setShowPlayer(false)} />
                <SongsList
                    searchValue={searchValue}
                    data={searchResults}
                    isLoading={isLoading}
                    showPlayer={showPlayer}
                    setShowPlayer={setShowPlayer}
                    currentMusic={currentMusic}
                    setCurrentMusic={setCurrentMusic}
                />
            </View >
            <MusicPlayer showPlayer={showPlayer} currentMusic={currentMusic} />
        </>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Colors.spacing * 2,
        paddingTop: Colors.spacing * 2
    }
})