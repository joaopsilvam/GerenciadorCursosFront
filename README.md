# 🎓 Gerenciador de Cursos - Frontend (Angular)

Este é o frontend da aplicação para gerenciamento de cursos, alunos e matrículas. Desenvolvido com Angular 17 e Angular Material.

## ✅ Requisitos

- [Node.js LTS](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- Git

## 🚀 Como rodar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/joaopsilvam/GerenciadorCursosFront.git
cd GerenciadorCursosFront
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure a URL da API**

No arquivo `src/environments/environment.ts`, ajuste a URL para o backend:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7010/api'
};
```

4. **Rode a aplicação**

```bash
ng serve
```

Acesse em:  
`http://localhost:4200`

## 📂 Funcionalidades

- ✅ Gerenciar cursos (CRUD)
- ✅ Gerenciar alunos (CRUD)
- ✅ Matricular alunos em cursos
- ✅ Listar alunos por curso

## 🛠 Tecnologias

- Angular 17+
- TypeScript
- Angular Material
