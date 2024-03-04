// PokemonSearchInput.tsx

import React, { ChangeEvent } from 'react';

interface PokemonSearchInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSearch: (searchQuery: string) => void;
}

const PokemonSearchInput: React.FC<PokemonSearchInputProps> = ({ value, onChange, onSearch }) => {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            placeholder="Search Pokemon..."
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onSearch(value);
                }
            }}
        />
    );
}

export default PokemonSearchInput;
