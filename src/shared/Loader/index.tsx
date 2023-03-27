// Realiza un comopoente que se encarga de mostrar un loader mientras se carga la información con Tailwind
const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    );
};

export default Loader;
