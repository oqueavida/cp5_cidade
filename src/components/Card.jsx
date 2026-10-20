export default function Card(nome, descricao, preco) {
    return 
        <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <span>R$ {preco}</span>
        </div>
}