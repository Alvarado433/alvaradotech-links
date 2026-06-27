# AlvaradoTech Links

Página de links oficial da **AlvaradoTech Soluções Digitais**, criada com **Next.js**, **React**, **TypeScript** e **CSS modularizado**.

O objetivo do projeto é reunir em uma única página os principais canais de contato, redes sociais e links profissionais da marca.

---

## 📌 Sobre o projeto

Este projeto funciona como uma página de apresentação rápida para a AlvaradoTech.

A página possui:

* Logo da empresa;
* Nome e descrição profissional;
* Botões com ícones;
* Links para WhatsApp, Instagram, GitHub, LinkedIn e Portfólio;
* Estado visual para botão em construção;
* Layout responsivo para celular, tablet e iPhone.

---

## 🚀 Tecnologias utilizadas

* Next.js
* React
* TypeScript
* CSS
* React Icons
* Git e GitHub

---

## 📁 Estrutura principal

```txt
app/
├── Dados/
│   └── empresa.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── button/
    ├── button.tsx
    └── button.type.ts

styles/
├── background.css
├── home.css
├── componentes/
│   └── buttons.css
├── global/
│   └── variables.css
├── reset/
│   └── reset.css
└── responsividade/
    └── responsividade.css

public/
└── Imagens/
    └── logo2.png
```

---

## ⚙️ Como executar o projeto

Primeiro, instale as dependências:

```bash
npm install
```

Depois, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```txt
http://localhost:3000
```

---

## 📱 Teste no celular pela mesma rede Wi-Fi

Execute o projeto liberando acesso na rede:

```bash
npm run dev -- -H 0.0.0.0
```

Depois descubra o IP do computador:

```bash
hostname -I
```

No celular, abra:

```txt
http://SEU-IP:3000
```

Exemplo:

```txt
http://192.168.1.50:3000
```

---

## 🌐 Teste com link público temporário

Para testar usando dados móveis, é possível usar o LocalTunnel:

```bash
npx localtunnel --port 3000
```

O terminal vai gerar um link público temporário.

---

## 🧩 Funcionalidades

* Botões reutilizáveis com componente próprio;
* Ícones utilizando `react-icons`;
* Dados da empresa separados da estrutura visual;
* CSS organizado por responsabilidade;
* Responsividade para telas menores;
* Ajustes específicos para celulares e iPhones;
* Botão de portfólio com estado visual de construção.

---

## 🛠️ Comandos úteis

Verificar alterações no Git:

```bash
git status
```

Adicionar arquivos:

```bash
git add .
```

Criar commit:

```bash
git commit -m "mensagem do commit"
```

Enviar para o GitHub:

```bash
git push
```

Gerar build de produção:

```bash
npm run build
```

---

## 📌 Status do projeto

Projeto em desenvolvimento.

Próximas melhorias planejadas:

* Publicação na Vercel;
* Ajustes finais de SEO;
* Criação da página de portfólio;
* Melhorias visuais;
* Animações leves;
* Integração com domínio próprio.

---

## 👨‍💻 Autor

Desenvolvido por **Rhaian Alvarado**
Projeto da **AlvaradoTech Soluções Digitais**
