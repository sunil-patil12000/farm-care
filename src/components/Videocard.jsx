

import './VideoCard.css';



var videoUrls = [
    'https://www.youtube.com/embed/VIDEO_ID1',
    'https://www.youtube.com/embed/VIDEO_ID2',
    'https://www.youtube.com/embed/VIDEO_ID3',

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
        <div className='container' style={{height:'80vh'}}>
            <div className="video-card-list">
                {videoUrls.map((url, index) => (
                    <VideoCard key={index} videoUrl={url} />
                ))}
            </div></div>
    );
};

export default VideoCardList;
