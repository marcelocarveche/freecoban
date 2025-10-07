# 🚀 Guia de Deploy - FreeCOBAN

## Configuração do GitHub Pages

### 1. Configurar o Repositório no GitHub

1. Acesse seu repositório: https://github.com/marcelocarveche/freecoban
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Build and deployment**:
   - **Source**: Selecione "GitHub Actions"
   - Isso permitirá que o workflow automático faça o deploy

### 2. Configurar o Domínio Customizado (Opcional)

Se você quiser usar o domínio `freecoban.marcelocarveche.com.br`:

1. No seu provedor de DNS (onde você gerencia marcelocarveche.com.br):
   - Adicione um registro **CNAME**:
     - Nome: `freecoban`
     - Valor: `marcelocarveche.github.io`
   
2. No GitHub, em **Settings > Pages > Custom domain**:
   - Digite: `freecoban.marcelocarveche.com.br`
   - Clique em **Save**
   - Marque a opção **Enforce HTTPS** (após a verificação do DNS)

### 3. Fazer o Deploy

#### Opção A: Deploy Automático (Recomendado)

O deploy acontece automaticamente quando você faz push para a branch `main`:

```bash
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main
```

O GitHub Actions irá:
1. Fazer build do projeto automaticamente
2. Publicar na branch `gh-pages`
3. Disponibilizar o site em alguns minutos

#### Opção B: Deploy Manual com gh-pages

Se preferir fazer deploy manual:

```bash
npm run deploy
```

### 4. Verificar o Deploy

Após o push, você pode:

1. Ver o progresso em **Actions** no GitHub
2. Acessar seu site em:
   - Com domínio customizado: https://freecoban.marcelocarveche.com.br
   - Ou no domínio padrão: https://marcelocarveche.github.io/freecoban

### 5. Solução de Problemas

**Se o site não carregar:**

1. Verifique se o workflow completou com sucesso em **Actions**
2. Verifique se o GitHub Pages está habilitado em **Settings > Pages**
3. Aguarde alguns minutos para a propagação

**Se as rotas não funcionarem:**

- O Vite está configurado para usar `base: '/'`
- O React Router está configurado com `BrowserRouter`
- Isso deve funcionar corretamente com o domínio customizado

**Se as imagens não carregarem:**

- As imagens na pasta `/public` são copiadas automaticamente para a raiz do dist
- URLs devem começar com `/` (ex: `/logo.png`)

## 📝 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build localmente
npm run serve

# Deploy manual
npm run deploy
```

## 🔄 Workflow Automático

O arquivo `.github/workflows/deploy.yml` faz o deploy automático a cada push na branch `main`. Ele:

- Instala as dependências
- Faz o build do projeto
- Publica no GitHub Pages

## ✅ Checklist Final

- [ ] Repositório no GitHub configurado
- [ ] GitHub Pages habilitado com "GitHub Actions"
- [ ] (Opcional) DNS configurado para domínio customizado
- [ ] Push para a branch `main` realizado
- [ ] Workflow completou com sucesso
- [ ] Site acessível na URL configurada

---

**URL do Site:** https://freecoban.marcelocarveche.com.br  
**Repositório:** https://github.com/marcelocarveche/freecoban
