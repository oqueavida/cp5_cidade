export default function Footer() {
    return (
        <footer className="bg-amber-700 px-6 py-8 text-center text-white">
            <h2 className="mb-2 text-xl font-bold">
                NessDev
            </h2>

            <p className="mb-4 text-sm text-amber-100">
                Café, tecnologia e boas ideias em um só lugar.
            </p>

            <div className="mb-4 flex justify-center gap-6">
                <a href="/" className="hover:text-amber-300">
                    Home
                </a>

                <a href="/produtos" className="hover:text-amber-300">
                    Produtos
                </a>
            </div>

            <p className="border-t border-amber-800 pt-4 text-sm text-amber-200">
                © 2026 NessDev. Todos os direitos reservados.
            </p>
        </footer>
    );
}