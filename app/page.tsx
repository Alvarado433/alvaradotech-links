import Button from "@/components/button/button";
import Image from "next/image";
import { dados, botoes } from "./Dados/empresa";


/*
|--------------------------------------------------------------------------
| DADOS DA EMPRESA
|--------------------------------------------------------------------------
|
| Como só existe uma empresa, utilizamos um OBJETO.
|
| Se futuramente existir mais de uma empresa,
| podemos transformar em um ARRAY.
|
| Tudo que é informação fica aqui.
| Tudo que é aparência (CSS) fica no componente.
|
|--------------------------------------------------------------------------
*/




export default function Home() {

    return (

        <main className="HomeCentralizado">

            <section className="CardPrincipal">

                {/* =======================================================
                    LOGO DA EMPRESA

                    Repare que agora não escrevemos mais o caminho
                    diretamente.

                    O valor vem do objeto "dados".

                    Isso facilita muito quando os dados vierem de uma API.
                ======================================================== */}

                <Image

                    src={dados.logo}

                    alt={dados.titulo}

                    width={120}

                    height={120}

                    className="CardPrincipalLogo"

                />

                {/* =======================================================
                    TÍTULO

                    O texto agora também vem do objeto.
                ======================================================== */}

                <h1 className="Titulo">

                    {dados.titulo}
                    

                </h1>

                {/* =======================================================
                    DESCRIÇÃO

                    Também utilizamos o objeto "dados".
                ======================================================== */}

                <p className="TituloDescricao">

                    {dados.descricao}

                </p>

                {/* =======================================================
                    LISTA DE BOTÕES

                    O método map() percorre TODOS os objetos do array.

                    Imagine a lista:

                    WhatsApp
                    Instagram
                    GitHub
                    LinkedIn
                    Portfólio

                    O React faz automaticamente:

                    item = WhatsApp

                    cria um Button

                    -----------------------------

                    item = Instagram

                    cria outro Button

                    -----------------------------

                    item = GitHub

                    cria outro Button

                    ...

                    Ou seja...

                    Você não precisa criar cinco componentes.

                    Basta criar UM.

                ======================================================== */}

                {

                    botoes.map((item) => (

                        <Button

                            /*
                            Toda lista precisa de uma chave.

                            O React utiliza essa chave para
                            identificar cada componente.
                            */

                            key={item.texto}

                            /*
                            Texto que aparecerá no botão.
                            */

                            texto={item.texto}

                            /*
                            Link que será aberto.
                            */

                            link={item.link}

                            /*
                            Classe CSS.

                            Aqui estamos dizendo ao Button
                            qual aparência ele terá.

                            Repare que className NÃO fica
                            dentro do objeto "dados".

                            Ela pertence ao componente.
                            */
icone={item.icone}
disabled={item.disabled}
descricao={item.descricao}                            className="BotaoLink"
                            

                        />

                    ))

                }

            </section>

        </main>

    );

}