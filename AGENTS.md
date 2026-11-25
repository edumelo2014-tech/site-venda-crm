# Diretrizes permanentes

- Toda a interface e todas as mensagens devem usar português do Brasil.
- Nunca inventar resultados de pesquisa, ranking, PageSpeed ou custos de API.
- Operações pagas exigem credencial válida, estimativa de custo e confirmação explícita.
- Dados comerciais pertencem ao usuário autenticado; toda consulta deve filtrar `owner_id`.
- Manter credenciais somente no servidor e nunca registrá-las em logs ou no navegador.
- Respeitar a opção “Não deseja contato” em qualquer automação ou follow-up.
- Valores monetários são armazenados em centavos inteiros e exibidos em BRL.
- Toda alteração relevante deve atualizar `IMPLEMENTATION_STATUS.md`.
- Antes da publicação, executar geração de migrações, build e verificação visual dos fluxos centrais.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
