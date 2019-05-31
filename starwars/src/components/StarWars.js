import React from 'react';
import Chars from './Chars';

const StarWars = ({ starWarsChars }) => {
    const data = starWarsChars.map((e) => {
        return <Chars key={e.created} Characters={e} />
    })
    return data;
}

export default StarWars; 