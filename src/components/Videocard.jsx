import React from 'react';
import './VideoCard.css';

const videoUrls = [
    'https://www.youtube.com/watch?v=MFfvzNj3LVU',
    'https://youtu.be/MFfvzNj3LVU',
    'https://www.youtube.com/embed/MFfvzNj3LVU',
];

const VideoCard = ({ videoUrl }) => {
    return (
        <div className="video-card">
            <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const VideoCardList = () => {
    return (
        <div className="container" style={{ height: '80vh' }}>
            <div className="video-card-list">
                {videoUrls.map((url, index) => (
                    <VideoCard key={index} videoUrl={url} />
                ))}
            </div>
        </div>
    );
};

export default VideoCardList;
