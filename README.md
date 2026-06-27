# AlvaradoTech Links

Página de links oficial da **AlvaradoTech Soluções Digitais**, criada com **Next.js**, **React**, **TypeScript** e **CSS modularizado**.

O objetivo do projeto é reunir em uma única página os principais canais de contato, redes sociais e links profissionais da marca.

---

## 🌐 Projeto publicado

Acesse o projeto online:

```txt
https://alvaradotech-links.vercel.app
```

---

## 📌 Sobre o projeto

Este projeto funciona como uma página de apresentação rápida para a **AlvaradoTech**.

A página possui:

* Logo da empresa;
* Nome e descrição profissional;
* Botões com ícones;
* Links para WhatsApp, Instagram, GitHub, LinkedIn e Portfólio;
* Estado visual para botão em construção;
* Favicon personalizado com a identidade da marca;
* Metadados configurados para o navegador;
* Layout responsivo para desktop, tablet, celulares Android e iPhone.

---

## 🚀 Tecnologias utilizadas

* Next.js;
* React;
* TypeScript;
* CSS;
* React Icons;
* Git;
* GitHub;
* Vercel.

---

## 📁 Estrutura principal

```txt
app/
├── Dados/
│   └── empresa.tsx
├── favicon.ico
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

## ⚙️ Como executar o projeto localmente

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

Execute o projeto liberando acesso pela rede local:

```bash
npm run dev -- -H 0.0.0.0
```

Depois descubra o IP do computador:

```bash
hostname -I
```

No celular, estando na mesma rede Wi-Fi, abra:

```txt
http://SEU-IP:3000
```

Exemplo:

```txt
http://192.168.1.50:3000
```

---

## 🧩 Funcionalidades

* Componente de botão reutilizável;
* Ícones utilizando `react-icons`;
* Dados da empresa separados da estrutura visual;
* Botão de portfólio com estado visual de construção;
* Favicon personalizado;
* Metadata configurada no `layout.tsx`;
* CSS separado por responsabilidade;
* Responsividade para telas menores;
* Ajustes para celulares e iPhones;
* Build de produção testado com sucesso;
* Deploy realizado na Vercel.

---

## 🧠 Organização dos dados

As informações principais da empresa ficam centralizadas no arquivo:

```txt
app/Dados/empresa.tsx
```

Esse arquivo contém dados como:

* Título do site;
* Descrição;
* Logo;
* Links dos botões;
* Ícones;
* Estado de botão desativado.

Essa organização facilita futuras alterações e prepara o projeto para receber dados vindos de uma API.

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

## ✅ Build de produção

O projeto foi testado com:

```bash
npm run build
```

Resultado:

```txt
✓ Compiled successfully
✓ Finished TypeScript
✓ Generating static pages
```

A rota principal `/` foi gerada como página estática, ideal para uma página de links rápida e leve.

---

## 🚀 Deploy

O projeto está publicado na **Vercel** e conectado ao repositório do GitHub.

Fluxo utilizado:

```txt
GitHub
↓
Vercel
↓
Deploy automático
↓
Link público oficial
```

Sempre que houver um novo `git push` na branch principal, a Vercel poderá gerar uma nova versão do projeto automaticamente.

---

## 📌 Status do projeto

Projeto publicado e em evolução.

Próximas melhorias planejadas:

* Atualização dos links oficiais;
* Ajustes finais de SEO;
* Configuração de domínio próprio;
* Criação da página de portfólio;
* Melhorias visuais;
* Animações leves;
* Novas seções para serviços da AlvaradoTech.

---

## 👨‍💻 Autor

Desenvolvido por **Rhaian Alvarado**.

Projeto da **AlvaradoTech Soluções Digitais**.
