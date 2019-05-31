import React from 'react';

const Chars = ({ Characters }) => {
    const { name, birth_year, gender, films } = Characters;
    return (
        <div className='charInfo'>
            <p>Name: {name}</p>
            <p>Birthday: {birth_year}</p>
            <p>Gender: {gender}</p>
            <div className="movies">
                <h4>Movies</h4>
                <ol>
                    {films.map((movie, index) => {
                        return <li key={index}>{movie}</li>
                    }
                    )
                    }
                </ol>
            </div>
        </div>
    )
}
export default Chars; 