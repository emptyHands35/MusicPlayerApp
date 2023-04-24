import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Colors from '../theme/Colors'
import { Search_Bar_Props } from '../types'

//Searchbar which is on the top of the app, takes value, setValue and onPress props from parent component
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
        color: Colors.textColor

    }
})