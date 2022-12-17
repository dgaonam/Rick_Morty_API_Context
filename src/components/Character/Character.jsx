import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,

} from "@chakra-ui/react";

import props from "./props";
import useCharacter from "../hooks/useCharacter";


const Character = ({ id, name, img, episode, species, status,onhandleClick }) => {
    const personaje = useCharacter();
    return <>
        <Card style={{ width: '100%' }} onClick={(event)=>{
            onhandleClick({...personaje,name,img,id,species,episode,status})
            //console.log(episode);
            //console.log(personaje);
        }}>
            <CardBody style={{textAlign:"center"}}>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{id}
                        </Heading>
                    </Stack>
                    <Image
                        src={img}
                        alt={name}
                        borderRadius='0%'
                    />
            </CardBody>
        </Card>

    </>
}

Character.prototype = props.PropTypes;
Character.defaultProps = props.defaulProps;

export default Character;