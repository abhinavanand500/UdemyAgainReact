import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: "Pyar Kiya To Darna Kya", duration: "4.35" },
        { title: "Honton Mein Aisi Baat Main", duration: "5.35" },
        { title: "Khaike Paan Banaraswala", duration: "4.25" },
        { title: "Yaara O Yaara Milna Hamara", duration: "3.35" },
        { title: "Pinga", duration: "2.35" },
        { title: "Chote Chote Bhaiyon Ke", duration: "4.59" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});
