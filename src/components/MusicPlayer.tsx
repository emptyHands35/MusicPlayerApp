import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';


const MusicPlayer = ({ showPlayer, currentMusic }: any) => {
    const playerState = usePlaybackState();
    const { position, duration } = useProgress(200);


    const format = (seconds: number) => {
        let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

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
            {showPlayer ?
                <View style={[styles.playerContainer, { height: 200 }]}>
                    <View>
                        <Text style={styles.text}>{currentMusic?.title}</Text>
                        <Text style={styles.text}> {format(position)} / {format(duration)}</Text>
                    </View>
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