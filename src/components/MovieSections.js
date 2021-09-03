import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import SectionDay from './SectionDay'

const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 110px;
font-size: 24px;
color: #293845;
`;

const MovieSection = styled.div`
margin: 0 24px;
`

const MovieSections = () => {
    const { idMovie } = useParams();
    const [sections, setSections] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`)
            .then(awnser => setSections(awnser.data))

    }, [])
    console.log(sections);
    return (
        <>
            <MovieSection>
                <Header>
                    Selecione o Horário
                </Header>
                {
                    Object.keys(sections).length === 0 ? <></> :
                        sections.days.map((day, key) =>
                            <SectionDay key={key}
                                id={day.id}
                                weekday={day.weekday}
                                date={day.date}
                                showtimes={day.showtimes}
                            />
                        )
                }
            </MovieSection>
            <Footer posterURL={sections.posterURL} title={sections.title} />
        </>
    )
}

export default MovieSections;