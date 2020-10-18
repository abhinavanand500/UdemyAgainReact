import React, { useState } from "react";
import "./Search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import axios from "axios";
import youtube from "../apis";
const Search = ({ setVideos, videos }) => {
    const [term, setTerm] = useState("");
    const sendMessage = async (event) => {
        event.preventDefault();
        const response = await youtube.get("search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };
    return (
        <div className='search'>
            <div className='chat_input'>
                <SearchRoundedIcon />
                <form>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder={`Search`}
                    />
                    <button
                        className='chat_inputButton'
                        type='submit'
                        onClick={sendMessage}>
                        Send Message
                    </button>
                </form>
                <div className='chat_inputIcons'></div>
            </div>
        </div>
    );
};

export default Search;
