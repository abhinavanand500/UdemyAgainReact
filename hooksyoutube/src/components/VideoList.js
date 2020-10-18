import React from "react";
import "./VideoList.css";
function VideoList({ videos }) {
    const renderedVideos = videos.map((video) => {
        return (
            <div className='video_list' key={video.id}>
                <div className='video_image'>
                    <img
                        className='img_list'
                        src={video.snippet.thumbnails.medium.url}
                    />
                </div>
                <div className='video_description'>
                    <h6>{video.snippet.title}</h6>
                    <span>{video.snippet.description}</span>
                </div>
            </div>
        );
    });

    return <div>{renderedVideos}</div>;
}

export default VideoList;
