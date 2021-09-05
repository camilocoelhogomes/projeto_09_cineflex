import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import SectionDay from './SectionDay'
import { Header } from './Shared'



const MovieSections = () => {
    const { idMovie } = useParams();
    const [sections, setSections] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`)
            .then(awnser => setSections(awnser.data))

    }, [])


    if (Object.keys(sections).length === 0) {
        return <Header>
            Selecione o Horário
        </Header>
    }

    return (
        <>
            <MovieSection>
                <Header>
                    Selecione o Horário
                </Header>
                {
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
            <Footer posterURL={sections.posterURL} title={sections.title} day={null} />
        </>
    )
}

export default MovieSections;

const MovieSection = styled.div`
margin: 0 24px;
`