import { createContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

import FormModal from "../components/FormModal";
import api from "../services/api"

export const VideoContext = createContext();

export function VideoContextProvider({children}) {
    const { data, mutate } = useAxios("/videos")

    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [id, setId] = useState(false)

    
    function handleAdd() {
        setOpenFormModal(true)
    }
    
    function handleEdit(VideoId, videoTitle, videoLink) {
        setTitle(videoTitle);
        setLink(videoLink);
        setId(VideoId)
        setOpenFormModal(true) 
        console.log(id) 
    } 

    function handleDelete(_id) {
        if(confirm("Deseja deletar este vídeo?")) {
            api.delete(`/videos/${_id}`)

            const updatedVideos = {
                videos: data.videos?.filter((video) => video._id !== _id)
            }
            mutate(updatedVideos, false)
        } else {
            false
        }
         
    }

    function handleLiked(_id) {
        api.patch(`/videos/${_id}`)

        const updateLike = {
            videos: data.videos?.map((video) => {
                if(video._id === _id) {
                    return {...video, title: video.title, link:video.link, liked: !video.liked};
                }
                return video
            })
        }
        mutate(updateLike, false)

    }

    function handleClose() {
        if(title) setTitle("");
        if(link) setLink("");
        setOpenFormModal(false)
    }
    
    function titleHandler(event) {
        setTitle(event.target.value)
        console.log(title)
    }
    function linkHandler(event) {
        setLink(event.target.value)
        console.log(link)
    }
    function handleSubmit(event) {
        event.preventDefault();
        
        const video = {
            title, 
            link
        }
        
        if(id) {
            api.put(`/videos/${id}`, video); 

            const updatedVideos = {
                videos: data.videos?.map((video) => {
                    if(video._id === id) {
                        return {...video, title, link};
                    }
                    return video
                })
            }

            mutate(updatedVideos, false)
        } else {
            api.post("/videos", video);

            const updatedVideos = {
                videos: [...data.videos, video]
            }
            mutate(updatedVideos, false)
        }
        setOpenFormModal(false);
    }
        return(
            <VideoContext.Provider value={{
            handleAdd,
            handleEdit,
            handleDelete,
            handleLiked,
            handleClose,
            handleSubmit,
            title, 
            titleHandler, 
            link,
            linkHandler,
            }}
            >
                {children}
                {openFormModal && <FormModal />}
            </VideoContext.Provider>
        )
}