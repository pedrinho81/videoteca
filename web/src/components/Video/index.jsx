import { useContext } from "react";

import {VideoContext} from "../../contexts/VideoContext"

import { Container, Title, Link, ButtonArea, Button, LikeIcon, EditIcon, DeleteIcon } from "./styles.js";

export default function Video({_id, title, link, liked}) {
    const {handleEdit, handleDelete, handleLiked} = useContext(VideoContext)

    return(
       <li>
        <Container>
            <Title>{title}</Title>
            <Link href={link}>{link}</Link>
            <ButtonArea>
                <Button>
                    <LikeIcon liked={liked} onClick={() => [handleLiked(_id), console.log(liked)]}/>
                </Button>
                <Button onClick={() => handleEdit(_id, title, link)}>
                    <EditIcon/>
                </Button>
                <Button>
                    <DeleteIcon onClick={() => handleDelete(_id)}/>
                </Button>
            </ButtonArea>
        </Container>
       </li> 
    )
}