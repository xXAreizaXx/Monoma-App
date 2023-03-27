// NextJS
import Image from "next/image";
import Link from "next/link";

const PokemonCard = (pokemon: PokemonCardProps) => {
    return (
        <li className="">
            <Link href={`/dashboard/${pokemon?.name}`}>
                <Image src={pokemon?.sprites?.front_default} alt={pokemon?.name} width={100} height={100}/>
                <h2>{pokemon?.name}</h2>
                <p>
                    {pokemon?.types?.map((item: any) => (
                        <span key={item?.id}>{item?.type?.name}</span>
                    ))}
                </p>
            </Link>
        </li>
    );
};

export default PokemonCard;
