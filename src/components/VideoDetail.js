import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading..</div>
    }
    else {

        const src = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <div className="ui embed">
                <iframe width="560" height="315"
                src={src} 
                title={video.snippet.description} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                </div>
                <div className="ui segment">
                <div>
                    <h4 className="ui header">
                    {video.snippet.title}
                    </h4>
                    <p>{video.snippet.description}</p>
                </div>
                </div>
            </div>
        )
    }
}


export default VideoDetail;