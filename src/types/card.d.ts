type PokemonCardProps = {
    name: string;
    weight: number;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
};
