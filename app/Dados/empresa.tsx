import { FaGlobe, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const site = {
    titulo: "AlvaradoTech | Links",
    descricao: "Links oficiais da AlvaradoTech Soluções Digitais",
    autor: "Rhaian Alvarado",
    url: "https://alvaradotech.br"
};

export const dados = {
    titulo: "AlvaradoTech",
    descricao: "Desenvolvimento Web • Sistemas • Automações",
    logo: "/Imagens/logo2.png"
};
export const botoes = [
    {
        texto: "WhatsApp",
        link: "#",
        icone: FaWhatsapp
    },
    {
        texto: "Instagram",
        link: "#",
        icone: FaInstagram
    },
    {
        texto: "GitHub",
        link: "#",
        icone: FaGithub
    },
    {
        texto: "LinkedIn",
        link: "#",
        icone: FaLinkedin
    },
    {
        texto: "Portfólio",
        link: "#",
        disabled: true,
        descricao: "em construçao",
        icone: FaGlobe
    }
];