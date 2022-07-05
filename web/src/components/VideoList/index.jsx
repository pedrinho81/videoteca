import { useEffect, useState } from "react";

import {Container, VideoListWrapper} from "./styles.js";

import AddVideo from "../AddVideo"
import Video from "../Video";

import api from "../../services/api.js";

export default function VideoList() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        api.get("/videos").then(({data}) => {
            setVideos(data.videos)
        })  
        console.log(videos)
    }, []);

    return(
        <Container>
            <VideoListWrapper>
            {videos?.map((video) => (
                <Video 
                key={video._id}
                id={video.id}
                title={video.title}  
                link={video.link}  
                liked={video.liked.toString()}
              />
            ))}
            
            <AddVideo/>
            </VideoListWrapper>
        </Container>
    )
}