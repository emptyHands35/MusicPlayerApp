import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../theme/Colors'

type Search_Bar_Props = {
    value: string,
    setValue: (value: string) => void;
    onPress: () => void
}

const SearchBar = ({ value, setValue, onPress }: Search_Bar_Props) => {
    return (
        <TextInput style={styles.inputBox}
            value={value}
            onPressIn={onPress}
            onChangeText={(value) => setValue(value)}
            placeholder='Search by artist'
            placeholderTextColor={Colors.textColor}
        />
    )
}

export default SearchBar

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: Colors.primaryBackground,
        padding: Colors.spacing,
        borderRadius: Colors.spacing * .5,
        color:Colors.textColor

    }
})