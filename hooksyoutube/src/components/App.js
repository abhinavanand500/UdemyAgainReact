import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import Title from "./Title";
import VideoList from "./VideoList";
const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState(videos[0]);
    console.log(videos);
    return (
        <div className='app container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <Search setVideos={setVideos} videos={videos} />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-lg-8'>
                    <Title />
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <VideoList videos={videos} />
                </div>
            </div>
        </div>
    );
};

export default App;
