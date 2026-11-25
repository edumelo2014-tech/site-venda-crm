# SEO Prospect CRM

CRM privado para prospecção e venda de sites e serviços de SEO local.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior.

1. Instale dependências com `npm run install:ci`.
2. Gere migrações com `npm run db:generate`.
3. Compile uma vez com `npm run build` para gerar a configuração local do D1.
4. Aplique cada migração pendente conforme o guia do starter.
5. Execute `npm run dev` e acesse `/signin-with-chatgpt?return_to=/` para a autenticação local simulada.

## Segurança e dados

O Site publicado é privado. A identidade autenticada chega ao servidor por cabeçalhos verificados pela plataforma. Todas as consultas filtram `owner_id`. Chaves de integrações devem ser configuradas como segredos do servidor e nunca em componentes cliente.

## Integrações

As telas de DataForSEO e PageSpeed deixam claro quando uma credencial está ausente. O sistema não gera resultados fictícios nem inicia operações pagas automaticamente. Consulte `.env.example` para os nomes das variáveis.

## Publicação

O projeto usa o fluxo de Sites com D1. A publicação aplica migrações versionadas antes de iniciar o Worker. O manifesto está em `.openai/hosting.json`.

## Documentos do projeto

- `PROJECT_SPEC.md`: escopo e regras de negócio.
- `IMPLEMENTATION_STATUS.md`: recursos concluídos e pendências reais.
- `AGENTS.md`: diretrizes permanentes para contribuições futuras.
