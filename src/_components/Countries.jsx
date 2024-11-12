import React from 'react'
import { useGetAllCountriesQuery, useGetCountryByNameQuery } from '../services/countryApi';

export default function Pokemons() {

    const { data } = useGetAllCountriesQuery();

    const {todo} = useGetCountryByNameQuery(1);
    console.log(todo)

    return (
        <div>
            <ol>
                <h2>TODOS</h2>
                {data?.map((todos) => {
                    return (
                        <li key={todos.id}>{todos.title} <span style={{color: 'red'}}>'{todos.completed}'</span></li>
                    );
                }).slice(0, 10)}
            </ol>
        </div>
    )
}
