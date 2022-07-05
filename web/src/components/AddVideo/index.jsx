import { useContext } from "react"

import { VideoContext } from "../../contexts/VideoContext.jsx"

import {AddVideoButton, AddIcon} from "./styles.js"

export default function AddVideo() {
    const {handleAdd} = useContext(VideoContext)
    return(
        <li>
            <AddVideoButton onClick={handleAdd}>
                <AddIcon />
            </AddVideoButton>
        </li>
    )
}