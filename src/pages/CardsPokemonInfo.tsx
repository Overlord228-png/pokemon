import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "scss/_cards.pokemon.Info.scss"; // Импортируем стили (путь к файлу стилей)

// Интерфейс для объектов Pokemon
interface Pokemon {
    name: string;
    url: string;
}

function CardsPokemonInfo() {
    // Состояние для списка покемонов, текущей страницы и общего количества страниц
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pokemonPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        // Функция для получения списка покемонов с API
        const fetchPokemonList = async () => {
            try {
                // Получаем список покемонов с указанием смещения и лимита
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * pokemonPerPage}&limit=${pokemonPerPage}`);
                // Устанавливаем полученный список покемонов
                setPokemonList(response.data.results);

                // Вычисляем общее количество страниц на основе общего количества покемонов
                const totalCount = response.data.count;
                setTotalPages(Math.ceil(totalCount / pokemonPerPage));
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemonList(); // Вызываем функцию получения списка покемонов
    }, [currentPage, pokemonPerPage]);

    // Функция для перехода на следующую страницу
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Функция для перехода на предыдущую страницу
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Функция для установки текущей страницы
    const setPage = (page: number) => {
        setCurrentPage(page);
    };

    // Функция для отрисовки пагинации
    const renderPagination = () => {
        const pagesToShow = 6; // Количество отображаемых страниц

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

    // Отрисовка компонента
    return (
        <div className="pokemon-info-container">
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((pokemon: Pokemon, index: number) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
                {renderPagination()}
                <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
            </div>
        </div>
    );
}

export default CardsPokemonInfo; // Экспорт компонента по умолчанию
