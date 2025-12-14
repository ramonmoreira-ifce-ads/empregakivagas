# Empregaki – Cadastro de Vagas

## 📌 Descrição do Projeto

O **Empregaki** é uma aplicação web desenvolvida com **Next.js** que permite o cadastro de vagas de emprego. O sistema possibilita que uma vaga seja **publicada diretamente** ou **salva como rascunho**, facilitando o gerenciamento antes da divulgação final.

O projeto foi desenvolvido como trabalho avaliativo da disciplina **Web II**, atendendo aos requisitos de utilização de **framework frontend**, **banco de dados**, **API** e **deploy em produção**.

---

## 🧠 Ideia Principal

Criar uma plataforma simples onde empresas possam:

* Cadastrar vagas de emprego
* Salvar vagas como rascunho
* Publicar vagas quando estiverem completas

---

## 🛠️ Tecnologias Utilizadas

* **Next.js (App Router)** – Framework frontend e backend
* **Supabase** – Banco de dados PostgreSQL
* **Supabase Client SDK** – Comunicação com o banco
* **Vercel** – Deploy da aplicação
* **HTML / CSS / JavaScript** – Interface do usuário

---

## 📁 Estrutura de Pastas

```
src/
├─ app/
│  ├─ api/
│  │  └─ vagas/
│  │     ├─ publicar/
│  │     │  └─ route.js
│  │     └─ rascunho/
│  │        └─ route.js
│  └─ page.jsx
│
├─ components/
│  └─ PublicarVagaForm.jsx
│
├─ lib/
│  └─ supabaseServer.js
│
└─ styles/
```

---

## 🔗 Endpoints da API

### 📌 Publicar vaga

**POST** `/api/vagas/publicar`

Salva uma vaga diretamente na tabela de vagas disponíveis.

### 📌 Salvar rascunho

**POST** `/api/vagas/rascunho`

Salva uma vaga como rascunho para edição futura.

---

## 🗄️ Modelagem do Banco de Dados

### Tabela: `vagasdisponiveis`

* id (uuid)
* titulo (text)
* descricao (text)
* requisitos (text)
* areaatuacao (text)
* salario (numeric)
* localizacao (text)
* cargahoraria (integer)
* numerovagas (integer)
* contato (text)
* datalimite (date)
* created_at (timestamp)

### Tabela: `vagasrascunho`

Possui a mesma estrutura da tabela de vagas disponíveis, porém permite campos nulos para facilitar o salvamento parcial.

---

## 🚀 Deploy na Vercel

### 1️⃣ Subir o projeto no GitHub

* Criar um repositório próprio
* Subir todo o código do projeto (exceto `.env`)

### 2️⃣ Criar projeto na Vercel

* Importar o repositório do GitHub
* Framework: **Next.js**

### 3️⃣ Configurar variáveis de ambiente

No painel da Vercel:

* `SUPABASE_URL`
* `SUPABASE_SERVICE_ROLE_KEY`

### 4️⃣ Realizar o deploy

Após salvar as variáveis, a Vercel realiza o deploy automaticamente.

---

## ▶️ Como rodar o projeto localmente

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

## 🎓 Observações para Apresentação

* O projeto utiliza arquitetura moderna com Next.js App Router
* O banco foi modelado de acordo com os dados reais do formulário
* A separação entre rascunho e vaga publicada facilita o fluxo do usuário
* O deploy em produção foi feito na Vercel

---

## 👤 Autor

Projeto desenvolvido por **Ramon Moreira** como atividade avaliativa acadêmica.