import type { IconType } from "react-icons";

export interface ButtonProps {
    texto: string;
    link: string;
    icone?: IconType;
    disabled?: boolean;
    descricao?: string;
    className?: string;
}