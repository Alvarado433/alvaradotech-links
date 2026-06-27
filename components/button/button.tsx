import { ButtonProps } from "./button.type";

export default function Button({
    texto,
    link,
    icone: Icone,
    disabled = false,
    descricao,
    className = ""
}: ButtonProps) {

    const classes = `${className} ${disabled ? "BotaoLinkDesativado" : ""}`.trim();

    const conteudo = (
        <>
            {Icone && <Icone className="BotaoIcone" />}

            <span className="BotaoConteudo">
                <span>{texto}</span>

                
            </span>
        </>
    );

    if (disabled) {
        return (
            <span className={classes} aria-disabled="true" title={descricao}>
                {conteudo}
            </span>
        );
    }

    return (
        <a href={link} className={classes}>
            {conteudo}
        </a>
    );
}