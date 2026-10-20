export default function Card({nome, descricao, preco}) {
    return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-stone-800">{nome}</h3>
        <p className="text-stone-600">{descricao}</p>
        <span className="text-lg font-semibold text-amber-700">R$ {preco}</span>
        <button className="mt-2 bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition">
            Pedir
        </button>
        </div>
    )
}