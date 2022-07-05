import {Container, VideoListWrapper} from "./styles.js";
import AddVideo from "../AddVideo"
import Video from "../Video";

export default function VideoList() {
    return(
        <Container>
            <VideoListWrapper>
            <Video 
              id={1}
              title="Title test"   
              link="https://www.youtube.com/watch?v=ExNSl9mMLCv&index=3"   
              liked={true}
            />
            
            <AddVideo/>
            </VideoListWrapper>
        </Container>
    )
}