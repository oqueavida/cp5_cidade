import { useState } from "react";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="relative bg-amber-600 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a
                    href="/"
                    className="text-2xl font-bold hover:text-amber-300"
                >
                    NessDev
                </a>

                <button
                    type="button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="rounded p-2 text-2xl hover:text-amber-300 md:hidden"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                >
                    {menuAberto ? "✕" : "☰"}
                </button>

                <div
                    className={`${menuAberto ? "flex" : "hidden"} absolute left-0 top-full z-10 w-full flex-col gap-4 bg-amber-950 p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
                >
                    <a
                        href="/"
                        onClick={() => setMenuAberto(false)}
                        className="hover:text-amber-300"
                    >
                        Home
                    </a>

                    <a
                        href="/produtos"
                        onClick={() => setMenuAberto(false)}
                        className="hover:text-amber-300"
                    >
                        Produtos
                    </a>
                </div>
            </div>
        </nav>
    );
}