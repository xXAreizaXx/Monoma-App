// NextJS
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// ReactJS
import { Fragment, useContext, useEffect, useState } from "react";

// Context
import { AuthContext } from "@context/AuthContext";

// Assets
import logo from "@assets/images/logo.png";

// Icons
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Home() {
    // NextJS
    const router = useRouter();    

    // Contexts
    const { login, isAuthenticated } = useContext(AuthContext);

    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    // Functions
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password);
    };

    // Effects
    useEffect(() => {
        if (isAuthenticated) router.push("/dashboard");
    }, [isAuthenticated, router]);


    return (
        <Fragment>
            <Head>
                <title>Monoma | Login</title>
                <meta name="description" content="Monoma technical test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="rounded-md flex flex-col items-center justify-center gap-4 bg-white p-8">
                    <Image
                        className="bg-secondary rounded-full p-4"
                        src={logo}
                        alt="Monoma"
                        width={200}
                        height={200}
                    />
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Inicio de sesión
                    </h2>
                    <form className="flex flex-col gap-4 justify-between" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="email-address" className="text-secondary font-bold">
                                  Correo electronico
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-none focus:border-gray-300 sm:text-sm"
                                    placeholder="Ingrese su correo electronico"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-secondary font-bold">
                                  Contraseña
                                </label>
                                <div className="flex flex-row border rounded-md border-gray-300">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className="w-full px-3 py-2 rounded-md border-none placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        required
                                        placeholder="Ingrese su contraseña"
                                    />
                                    <button
                                        type="button"
                                        className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeIcon className="h-6 w-6 text-secondary"/>
                                        ) : (
                                            <EyeSlashIcon className="h-6 w-6 text-secondary"/>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                            >
                                Ingresa 
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    );
}
