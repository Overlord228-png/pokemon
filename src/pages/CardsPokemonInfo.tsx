import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "scss/_cards.pokemon.Info.scss";
import PokemonSearchInput from "components/PokemonSearchInput";
import PokemonCard from "components/PokemonCard"

interface Pokemon {
    name: string;
    url: string;
    sprites: {
        front_default: string;
    };
    attack: number,
    strength: number,
    agility: number,
    health: number,
    defense:number
}

function CardsPokemonInfo() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pokemonPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [validQuery, setValidQuery] = useState<boolean>(true);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * pokemonPerPage}&limit=${pokemonPerPage}`);
                setPokemonList(response.data.results);

                const totalCount = response.data.count;
                setTotalPages(Math.ceil(totalCount / pokemonPerPage));
                setError(null);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
                setError('Failed to fetch Pokemon. Please try again.');
            }
        };

        fetchPokemonList();
    }, [currentPage, pokemonPerPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const setPage = (page: number) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pagesToShow = 6;
        const pages = [];
        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > pagesToShow) {
            startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
            endPage = Math.min(startPage + pagesToShow - 1, totalPages);

            if (endPage - startPage + 1 < pagesToShow) {
                startPage = endPage - pagesToShow + 1;
            }
        }

        if (startPage > 1) {
            pages.push(<button key={1} onClick={() => setPage(1)}>1</button>);
            if (startPage > 2) {
                pages.push(<span key="ellipsis1">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={currentPage === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="ellipsis2">...</span>);
            }
            pages.push(
                <button key={totalPages} onClick={() => setPage(totalPages)}>{totalPages}</button>
            );
        }

        return pages;
    };

    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (searchQuery: string) => {
        setSearchQuery(searchQuery);
        if (searchQuery.length > 20) {
            setValidQuery(false);
        } else {
            setValidQuery(true);
        }
    };

    const fetchPokemonDetails = async (url: string) => {
        try {
            const response = await axios.get(url);
            setSelectedPokemon(response.data);
        } catch (error) {
            console.error('Error, fetching Pokemon::', error);
            setError('Failed to fetch Pokemon details. Please try again.');
        }
    };

    return (
        <div className="pokemon__info-container">
            {error && <div className="error__message">{error}</div>}
            <h1 className="pokemon-list-title">Pokemon List</h1>

            <PokemonSearchInput value={searchQuery} onChange={handleSearchChange} onSearch={handleSearch} />

            {!validQuery && <div className="error__message">Search query is too long. Maximum length is 20 characters.</div>}
            {filteredPokemon.length === 0 && <div className="error__message">No Pokemon found.</div>}

            <ul className="pokemon__list">
                {filteredPokemon.map((pokemon: Pokemon, index: number) => (
                    <li key={index} onClick={() => fetchPokemonDetails(pokemon.url)} className="pokemon__item">
                        {pokemon.name}
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
                {renderPagination()}
                <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
            </div>

            {selectedPokemon && (
                <div className="pokemon__details">
                    <PokemonCard pokemon={selectedPokemon} />
                </div>
            )}
        </div>
    );
}

export default CardsPokemonInfo;