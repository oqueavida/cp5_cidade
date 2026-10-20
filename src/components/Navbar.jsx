import { useState } from "react";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="bg-amber-600 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="/" className="text-2xl font-bold">
                    
                    NessDev
                </a>

                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="text-2xl md:hidden"
                    aria-label="Abrir menu"
                    aria-expanded={menuAberto}
                >
                    ☰
                </button>

                <div
                    className={`${menuAberto ? "flex" : "hidden"} absolute left-0 top-16 z-10 w-full flex-col gap-4 bg-amber-950 p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
                >
                    <a href="/" className="hover:text-amber-300">
                        Home
                    </a>

                    <a href="/produtos" className="hover:text-amber-300">
                        Produtos
                    </a>
                </div>
            </div>
        </nav>
    );
}