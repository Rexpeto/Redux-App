const Header = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="favicon.svg" className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Redux App
                    </span>
                </a>
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
                    >
                        Agregar Producto
                    </button>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Abrir menú</span>
                        {/**
                         * Here button hamburgue
                         */}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
