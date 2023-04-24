//types used in this app to define props for components and functions

export type CURRENT_MUSIC = {
    id: string,
    title: string,
    url: string,
}

export type SONGLIST_PROPS = {
    data: any,
    isLoading: boolean,
    searchValue: string,
    showPlayer: boolean,
    setShowPlayer: (val: boolean) => void,
    setCurrentMusic: (val: CURRENT_MUSIC) => void,
    currentMusic: CURRENT_MUSIC | undefined,
}

export type CARDITEM_PROPS = {
    artwork: string,
    trackName: string,
    artistName: string,
    collectionName: string,
    previewUrl: string,
    onPress: (trackName: string, previewUrl: string, trackId: string) => void,
    trackId: string,
    currentMusic: CURRENT_MUSIC | undefined
}

export type Search_Bar_Props = {
    value: string,
    setValue: (value: string) => void;
    onPress: () => void
}