import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    ListItem,
    OrderedList,
} from "@chakra-ui/react";

import useCharacter from "../hooks/useCharacter";
import { useEffect } from "react";

const CharacterSelect = () => {
    const personaje = useCharacter();
    
    return <>
        
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{personaje.id}
                        </Heading>
                    </Stack>
                    <Image
                        src={personaje.img}
                        alt={personaje.name}
                        borderRadius='0%'
                    />
                    <Heading>Nombre: {personaje.name}</Heading>
                    <h1>Especie: {personaje.species}</h1>
                    <h1>Estatus: {personaje.status}</h1>
                     <OrderedList>
                            {personaje.episode.map((url, name) => (
                                <ListItem key={name}>
                                    <a href={url}>{url}</a></ListItem>
                            ))}
            </OrderedList>
           

    </>
}

export default CharacterSelect;