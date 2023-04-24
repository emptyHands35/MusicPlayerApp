import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Ionicons';

//MusicPlayer which is displayed on the bottom of app when song is selected from the list
const MusicPlayer = ({ showPlayer, currentMusic }: any) => {
    const playerState = usePlaybackState(); // to get the musicplayer state i.e, is playing or paused
    const { position, duration } = useProgress(200); //hook from track player to get selected song length and position

    //format function to return seconds from durition and position
    const format = (seconds: number) => {
        let mins = (Math.floor(seconds / 60)).toString().padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    //Musicplayer pause play button handler
    const handlePlayPress = async () => {
        if (await TrackPlayer.getState() == State.Playing) {
            TrackPlayer.pause();
        }
        else {
            TrackPlayer.play();
        }
    }
    return (
        <>
            {/* only to display musicplayer at bottom when currentmusic object is set and show player boolean is set to true*/}
            {showPlayer && currentMusic ?
                <View style={[styles.playerContainer, { height: 200 }]}>
                    {/* Displays current music name and it duration and position */}
                    <View>
                        <Text style={styles.text}>{currentMusic?.title}</Text>
                        <Text style={styles.text}> {format(position)} / {format(duration)}</Text>
                    </View>
                    {/* Pause play button, it calls handlePlayPress function when pressed */}
                    <TouchableOpacity onPress={() => handlePlayPress()} style={{ alignSelf: 'center' }}>
                        <Icon name={playerState == State.Playing ? 'pause' : 'play'} size={40} color="#fff" />
                    </TouchableOpacity>
                </View >
                : null}
        </>
    )
}

export default MusicPlayer
const styles = StyleSheet.create({
    playerContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "600"
    }
})