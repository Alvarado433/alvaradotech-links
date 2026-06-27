import { FaGlobe, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const site = {
    titulo: "AlvaradoTech | Links",
    descricao: "Links oficiais da AlvaradoTech Soluções Digitais",
    autor: "Rhaian Alvarado",
    url: "https://alvaradotech-links.vercel.app"
};

export const dados = {
    titulo: "AlvaradoTech",
    descricao: "Desenvolvimento Web • Sistemas • Automações",
    logo: "/Imagens/logo2.png"
};

export const botoes = [
    {
        texto: "WhatsApp",
        link: "https://wa.me/5511949516737?text=Ol%C3%A1%2C%20vim%20pelo%20link%20da%20AlvaradoTech.",
        icone: FaWhatsapp
    },
    {
        texto: "Instagram",
        link: "https://www.instagram.com/alvaradotech.br/",
        icone: FaInstagram
    },
    {
        texto: "GitHub",
        link: "https://github.com/Alvarado433",
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
        descricao: "em construção",
        icone: FaGlobe
    }
];