import Card from "../components/Card";

const produtos = [
    { id: 1, nome: "Espresso", descricao: "Café forte e original da casa", preco: "6,00" },
    { id: 2, nome: "Cappuccino", descricao: "Com leite e canela", preco: "9,00" },
    { id: 3, nome: "Pão de queijo", descricao: "Quentinho, saído do forno", preco: "5,00" },
    { id: 4, nome: "Bolo de cenoura", descricao: "Com cobertura de chocolate premium", preco: "8,00" },
];

export default function Produtos() {
    return (
    <main className="min-h-screen bg-amber-50">
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Produtos Disponíveis no nosso cardápio</h1>
            <div>
            {produtos.map((p) => (
                <Card key={p.id} nome={p.nome} descricao={p.descricao} preco={p.preco}/>
            ))}
            </div>
        </div>
    </main>
    )
}