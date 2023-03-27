// NextJS
import { useRouter } from "next/router";
import Image from "next/image";

// ReactJS
import { Suspense } from "react";

// Containers
import AppContainer from "@containers/AppContainer";

// Hooks
import { useFetch } from "@hooks/useFetch";

// Shared
import Loader from "@shared/Loader";

const PokemonProfile = () => {
    // NextJS
    const router = useRouter();
    const { id } = router.query;

    // Hooks
    const { data, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    
    return (
        <AppContainer title="Dashboard">
            <Suspense fallback={<Loader />}>
                <h1>{data?.name}</h1>
                <Image src={data?.sprites?.front_default} alt={data?.name} width={100} height={100}/>
            </Suspense>
        </AppContainer>
    );
};

export default PokemonProfile;
