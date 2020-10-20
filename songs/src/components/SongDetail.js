import React from "react";
import { connect } from "react-redux";
function SongDetail({ song }) {
    if (!song) {
        return (
            <div>
                <h3>Please select a song</h3>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Details for</h3>
                <p>Title : {song.title}</p>
                <p>Duration : {song.duration}</p>
            </div>
        );
    }
}
const mapStateToProp = (state) => {
    return {
        song: state.selectedSong,
    };
};

export default connect(mapStateToProp)(SongDetail);
