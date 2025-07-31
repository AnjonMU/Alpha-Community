import React from 'react';
import './Gallery.css';

const events = [{
        name: '🎉 Event 1: Freshers Welcome',
        photos: Array.from({ length: 10 }, (_, i) => require(`./media/event1/photo${i + 1}.jpeg`)),
        videos: Array.from({ length: 10 }, (_, i) => require(`./media/event1/video${i + 1}.mp4`))
    },
    {
        name: '📸 Event 2: Annual Function',
        photos: Array.from({ length: 10 }, (_, i) => require(`./media/event2/photo${i + 1}.jpeg`)),
        videos: Array.from({ length: 10 }, (_, i) => require(`./media/event2/video${i + 1}.mp4`))
    },
    {
        name: '🎓 Event 3: Graduation Ceremony',
        photos: Array.from({ length: 10 }, (_, i) => require(`./media/event3/photo${i + 1}.jpeg`)),
        videos: Array.from({ length: 10 }, (_, i) => require(`./media/event3/video${i + 1}.mp4`))
    }
];

const Gallery = () => {
    return ( <
        div className = "gallery-container" > {
            events.map((event, index) => ( <
                div key = { index }
                className = "event-section" >
                <
                h2 className = "event-title" > { event.name } < /h2>

                <
                div className = "media-section" >
                <
                div className = "media-group" >
                <
                h3 > Photos < /h3> <
                div className = "grid" > {
                    event.photos.map((photo, i) => ( <
                        img key = { i }
                        src = { photo }
                        alt = { `event${index + 1}-photo${i + 1}` }
                        className = "photo" / >
                    ))
                } <
                /div> < /
                div >

                <
                div className = "media-group" >
                <
                h3 > Videos < /h3> <
                div className = "grid" > {
                    event.videos.map((video, i) => ( <
                        video key = { i }
                        controls className = "video" >
                        <
                        source src = { video }
                        type = "video/mp4" / >
                        Your browser does not support the video tag. <
                        /video>
                    ))
                } <
                /div> < /
                div > <
                /div> < /
                div >
            ))
        } <
        /div>
    );
};

export default Gallery;