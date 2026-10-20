export default function Footer() {
    return (
        <footer className="bg-amber-700 px-6 py-8 text-center text-white">
            <h2 className="mb-2 text-xl font-bold">
                Cafeteria Dev
            </h2>

            <p className="mb-5 text-sm text-amber-100">
                Café, tecnologia e boas ideias em um só lugar.
            </p>

            <nav
                aria-label="Links do rodapé"
                className="mb-5 flex justify-center gap-6"
            >
                <a
                    href="/"
                    className="hover:text-amber-300"
                >
                    Início
                </a>

                <a
                    href="/produtos"
                    className="hover:text-amber-300"
                >
                    Produtos
                </a>
            </nav>

            <p className="border-t border-amber-700 pt-4 text-sm text-amber-200">
                © {new Date().getFullYear()} Cafeteria Dev. Todos os direitos reservados.
            </p>
        </footer>
    );
}