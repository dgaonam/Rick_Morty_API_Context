import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "../Character"
import CharacterSelect from "../Character/CharacterSelect";
import CharacterContext from "../../context/CharacterContext";

import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    // usePaginator
} from "chakra-paginator";
import { Grid, GridItem } from '@chakra-ui/react'

const ListApi = ({ idRequest }) => {
    const [data, setData] = useState([]);
    const [paginas, setPaginas] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState('/api/character/' + idRequest);

    const [CharacterData,setChracterData] = useState({
        id: null,
        name: "unknown",
        status: "unknown",
        species: "unknown",
        type: "unknown",
        origin: {
            name: "unknown",
            url: "unknown"
        },
        location: {
            name: "unknown",
            url: "unknown"
        },
        img: "unknown",
        episode: [],
        created: "unknown"
    }) ;

    const obtenerApi = () => {

        axios.get(url).then(
            (result) => {

                if (typeof result.data.results === 'undefined')
                    setData(result.data);
                else {
                    setPaginas(result.data.info.pages);
                    setData(result.data.results);
                }

            }
        ).catch(
            (result) => {
                //console.log(result)
                return [];
            }
        );
    };

    useEffect(() => {
        obtenerApi();
    }, [url]);

    useEffect(() => {
        if (idRequest.length >= 1) {
            setUrl('/api/character/' + idRequest);
        } else {
            setUrl('/api/character/?page=' + currentPage);
        }
    });
    const paginacion = () => {
        return (
            <>
                <Paginator
                    pagesQuantity={paginas}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                >
                    <Container align="center" justify="space-between" w="full" p={4}>
                        <Previous>
                            Previous
                            {/* Or an icon from `react-icons` */}
                        </Previous>
                        <PageGroup isInline align="center" />
                        <Next>
                            Next
                            {/* Or an icon from `react-icons` */}
                        </Next>
                    </Container>
                </Paginator>

            </>
        );
    };
    return (<>
        <Grid templateColumns='repeat(2, 1fr)'>
            <GridItem colSpan={2}>{data.length > 1 ? paginacion() : ""}</GridItem>
            <GridItem width={"30%"} >
                <Grid width={"100%"}>
                    {data.length > 1 ? data.map((character) => {
                        return (
                            <GridItem >
                                <Character onhandleClick={setChracterData} key={character.id} id={character.id} name={character.name} episode={character.episode} img={character.image} species={character.species} status={character.status} />
                            </GridItem>
                        );
                    }) : <>
                        <GridItem >
                            <Character onhandleClick={setChracterData} key={data.id} id={data.id} name={data.name} episode={data.episode} img={data.image} species={data.species} status={data.status} />
                        </GridItem>
                    </>
                    }
                </Grid>
            </GridItem>
            <GridItem>
                <CharacterContext.Provider value={CharacterData}>
                    <CharacterSelect />
                </CharacterContext.Provider>
            </GridItem>
        </Grid>

    </>);
};

export default ListApi;