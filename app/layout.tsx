import type { Metadata } from "next";
import { site } from "./Dados/empresa";
import "./globals.css";

export const metadata: Metadata = {
    title: site.titulo,
    description: site.descricao,
    authors: [
        {
            name: site.autor
        }
    ],
    openGraph: {
        title: site.titulo,
        description: site.descricao,
        url: site.url,
        siteName: "AlvaradoTech",
        locale: "pt_BR",
        type: "website"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}