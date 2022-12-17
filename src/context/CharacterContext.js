import { createContext, useContext } from "react";

const CharacterContext = createContext({
    id:null,
    name:"unknown",
    status:"unknown",
    species:"unknown",
    type:"unknown",
    origin:{
        name:"unknown",
        url:"unknown"
    },
    location:{
        name:"unknown",
        url:"unknown"
    },
    img:"unknown",
    episode:[],
    created:"unknown"
});

export default CharacterContext;