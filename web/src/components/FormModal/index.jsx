import {
    Overlay,
    Container,
    Header,
    FormContainer,
    FormMain,
    InputGroup, 
    Footer,
    CloseIcon,
    CheckIcon,
    Input,
    Button
} from "./styles"

import { VideoContext } from "../../contexts/VideoContext.jsx"
import { useContext } from "react"

export default function FormModal() {
    const {handleClose, title, titleHandler, 
           link, linkHandler,
           handleSubmit} = useContext(VideoContext)
           
    return(
        <Overlay>
            <Container>
                <Header>
                    <strong>Add a video</strong>
                    <button type="button"
                            onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}> 
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title">Title</label>
                            <Input id="title" type="text" value={title}
                             onChange={titleHandler}/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="link">Link</label>
                            <Input id="link" type="text" value={link}
                            onChange={linkHandler}/>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <Button type="submit"> 
                            <CheckIcon />
                        </Button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}