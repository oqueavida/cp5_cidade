export default function Navbar() {
    return (
        <nav className="bg-amber-600 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold">
                    Cafeteria Dev
                </h1>

                <div className="flex gap-6">
                    <a href="/">Início</a>
                    <a href="/produtos">Produtos</a>
                </div>
            </div>
        </nav>

    );
}