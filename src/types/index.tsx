export type CURRENT_MUSIC = {
    id: string,
    title: string,
    url: string,
}

export type ALBUMLIST_PROPS = {
    data: any,
    isLoading: boolean,
    searchValue: string,
    showPlayer: boolean,
    setShowPlayer: (val: boolean) => void,
    setCurrentMusic: (val: CURRENT_MUSIC) => void,
    currentMusic: CURRENT_MUSIC,
}


export type CARDITEM_PROPS = {
    artwork: string,
    trackName: string,
    artistName: string,
    collectionName: string,
    previewUrl: string,
    onPress: (trackName: string, previewUrl: string, trackId: string) => void,
    trackId: string,
    currentMusic: any
}