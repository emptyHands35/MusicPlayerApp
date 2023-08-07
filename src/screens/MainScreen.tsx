import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SongsList, SearchBar, MusicPlayer } from '../components'
import Colors from '../theme/Colors'
import useFetchSongs from '../hooks/useFetchSongs'
import TrackPlayer from 'react-native-track-player'
import { CURRENT_MUSIC } from '../types'

//Main screen container that holds all app state and renders, searchBar, Flatlist and MusicPlayer
const MainScreen = () => {
    const [searchValue, setSearchValue] = useState<string>("Ed Sheeran") //useState hook to keep user input on TextInput
    const [searchResults, setSearchResults] = useState() //Holds search results from iTunes API Call
    const [showPlayer, setShowPlayer] = useState<boolean>(false) //Boolean to show player at the bottom of screen
    const [currentMusic, setCurrentMusic] = useState<CURRENT_MUSIC | undefined>() //Current playing music object when user taps on item from the list or it is undefined

    //useFetch hook that returns data, isLoading state and error when user types inside inputbox
    const { data, isLoading, error } = useFetchSongs(searchValue)

    //useEffect hook to set searchResults once promise has returned data from API, it re-renders each time when search result data is changed
    useEffect(() => {
        setSearchResults(data)
    }, [data])

    //function to setup react-native-track-player
    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
        } catch (e) {
            console.log(e);
        }
    };

    //calling above function insite useEffect hook to setuptrack player everytime main screen is mounted
    useEffect(() => {
        setUpTrackPlayer()
    }, []);

    return (
        <>
            <View style={styles.container}>
                {/* SearchBar that takes value, setValue and onPress callback as prop  */}
                <SearchBar value={searchValue} setValue={setSearchValue} onPress={() => setShowPlayer(false)} />
                {/* Flatlist that displays card items for each object from data array */}
                <SongsList
                    searchValue={searchValue}
                    data={searchResults}
                    isLoading={isLoading}
                    showPlayer={showPlayer}
                    setShowPlayer={setShowPlayer}
                    currentMusic={currentMusic}
                    setCurrentMusic={setCurrentMusic}
                />
            </View>
            {/* Music player / controller only displays when showPlayer & current music is TRUE */}
            <MusicPlayer showPlayer={showPlayer} currentMusic={currentMusic} />
        </>
    )
}

export default MainScreen

//Styling for mainScreen component
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Colors.spacing * 2,
        paddingTop: Colors.spacing * 2
    }
})