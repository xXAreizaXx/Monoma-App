// NextJS
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// ReactJS
import { Fragment, useContext, useEffect } from "react";

// Context
import { AuthContext } from "@context/AuthContext";

// Assets
import logo from "@assets/images/logo.png";

// Heroicons
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const AppContainer: React.FC<ComponentProps> = ({ children, title }) => {
    // NextJS
    const router = useRouter();

    // Context
    const { isAuthenticated, logout } = useContext(AuthContext);

    // Effects
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        } else {
            router.push("/");
        }
    }, [isAuthenticated]);

    return (
        <Fragment>
            <Head>
                <title>Monoma | {title}</title>
            </Head>
            <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-md flex flex-col items-center justify-center">
                    <header className="w-full bg-secondary p-4 rounded-t-md flex items-center justify-center">
                        <button
                            className="bg-gray-300 rounded-full p-2 mr-4 hover:bg-gray-400"
                            onClick={logout}
                        >
                            <ArrowRightOnRectangleIcon className="h-8 w-8 text-gray-600"/>
                        </button>
                        <Image
                            src={logo}
                            alt="Monoma"
                            width={200}
                            height={200}
                        />
                    </header>
                    {children}
                </div>
            </main>
        </Fragment>
    );
};

export default AppContainer;
