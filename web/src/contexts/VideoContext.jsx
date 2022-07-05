import { createContext, useState } from "react";

import FormModal from "../components/FormModal";
import api from "../services/api"

export const VideoContext = createContext();

export function VideoContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    function handleAdd() {
        setOpenFormModal(true)
    }

    function handleClose() {
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
        event.preventDefault()
        const video = {
            title, 
            link
        }
        api.post("/videos", video);
        setOpenFormModal(false)
    }
        return(
            <VideoContext.Provider value={{handleAdd,
            handleClose,
            title, 
            titleHandler, 
            link,
            linkHandler,
        handleSubmit}}
            >
                {children}
                {openFormModal && <FormModal />}
            </VideoContext.Provider>
        )
}