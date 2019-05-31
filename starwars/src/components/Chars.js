import React from 'react';
import '../components/StarWars.css'

const Chars = ({ Characters }) => {
    const { name, birth_year, gender, films } = Characters;
    return (
        <div className='charInfo'>
            <p>Name: {name}</p>
            <p>Birthday: {birth_year}</p>
            <p>Gender: {gender}</p>
            <div className="movies">
                <h4>Movies</h4>
                <ul>
                    {films.map((movie, index) => {
                        return <li key={index}>{movie}</li>
                    }
                    )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Chars; 