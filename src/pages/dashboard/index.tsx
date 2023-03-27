// ReactJS
import { Suspense, useEffect, useState } from "react";

// Hooks
import { useFetch } from "@hooks/useFetch";

// Shared
import Loader from "@shared/Loader";
import PokemonCard from "@shared/PokemonCard";

// Containers
import AppContainer from "@containers/AppContainer";

// Axios
import axios from "axios";

const DashboardScreen = () => {
    // Hooks
    const { data, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}`);

    // States
    const [pokemons, setPokemons] = useState([]);

    // Functions
    const getPokemon = async (url: string) => {
        const res = await axios(url);
        setPokemons((prev) => [...prev, res?.data]);
    };

    // Effects
    useEffect(() => {
        data?.results?.forEach((item: any) => {           
            getPokemon(item?.url);
        });
    }, [data]);

    if (loading) return <Loader />;

    if (error) return <div>Error: {error?.message}</div>;      

    return (
        <AppContainer title="Dashboard">
            <Suspense fallback={<Loader />}>
                <ul className="w-full flex flex-row flex-wrap justify-between items-center gap-4">
                    {pokemons.map((item: any) => (
                        <PokemonCard key={item?.id} {...item}/>
                    ))}
                </ul>
            </Suspense>
        </AppContainer>
    );
};

export default DashboardScreen;
