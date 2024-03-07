# Video explicativo

https://www.youtube.com/watch?v=zht3KVx70oA

# Versões

- Node 12

# Como executar

- Crie um arquivo .env dentro da pasta server contendo a variável DATABASE_URL neste formato:

```bash
DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}"
```

```bash
git clone https://github.com/greysonmrx/facilita-juridico
cd facilita-juridico
cd server
npm install
npm run dev

cd ..
cd frontend
npm install
npm run dev
```
