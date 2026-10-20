
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-400">
          Cafeteria Dev
        </p>

        <h1 className="mb-6 max-w-3xl text-4xl font-bold md:text-6xl">
          Seu próximo café favorito está aqui.
        </h1>

        <p className="mb-8 max-w-xl text-stone-300">
          Cafés especiais para acompanhar sua rotina.
        </p>

        <Link
          to="/produtos"
          className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-stone-950 hover:bg-amber-300"
        >
          Conheça nosso cardápio
        </Link>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Muito mais que café
        </h2>

        <p className="mx-auto max-w-2xl text-stone-300">
          Um espaço para apreciar bons cafés, relaxar
          e aproveitar cada momento.
        </p>
      </section>

          <section className="px-6 py-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                  Muito mais que café
              </h2>

              <p className="mx-auto mb-12 max-w-2xl text-stone-300">
                  Um espaço para apreciar bons cafés, relaxar
                  e aproveitar cada momento.
              </p>

              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
                      <span className="text-4xl">☕</span>
                      <h3 className="mt-4 mb-2 text-xl font-semibold text-amber-400">
                          Grãos selecionados
                      </h3>
                      <p className="text-sm text-stone-300">
                          Cafés especiais de origem controlada, torrados com cuidado.
                      </p>
                  </div>

                  <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
                      <span className="text-4xl">💻</span>
                      <h3 className="mt-4 mb-2 text-xl font-semibold text-amber-400">
                          Ambiente para devs
                      </h3>
                      <p className="text-sm text-stone-300">
                          Wi-Fi rápido, tomadas por todo lado e silêncio para codar.
                      </p>
                  </div>

                  <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
                      <span className="text-4xl">🥐</span>
                      <h3 className="mt-4 mb-2 text-xl font-semibold text-amber-400">
                          Feito na hora
                      </h3>
                      <p className="text-sm text-stone-300">
                          Salgados e doces fresquinhos para acompanhar seu café.
                      </p>
                  </div>
              </div>


                    <section className="bg-amber-400 px-6 py-16 text-center text-stone-950">
        <h2 className="mb-4 text-3xl font-bold">
          Pronto para o primeiro gole?
        </h2>

        <p className="mx-auto mb-8 max-w-xl">
          Explore nosso cardápio e descubra a combinação perfeita
          para o seu dia.
        </p>

        <Link
          to="/produtos"
          className="rounded-lg bg-stone-950 px-6 py-3 font-semibold text-amber-400 hover:bg-stone-800"
        >
          Ver produtos
        </Link>
      </section>
          </section>
    </main>
  );
}
