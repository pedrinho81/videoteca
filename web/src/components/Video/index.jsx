import {IoTrashBin} from "react-icons/io5"

import { Container, Title, Link, ButtonArea, Button, LikeIcon, EditIcon, DeleteIcon } from "./styles.js";

export default function Video({id, title, link, liked}) {
    return(
       <li>
        <Container>
            <Title>{title}</Title>
            <Link>{link}</Link>
            <ButtonArea>
                <Button>
                    <LikeIcon liked={liked}/>
                </Button>
                <Button>
                    <EditIcon/>
                </Button>
                <Button>
                    <DeleteIcon/>
                </Button>
            </ButtonArea>
        </Container>
       </li> 
    )
}