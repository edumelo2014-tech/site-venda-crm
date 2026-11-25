# SEO Prospect CRM — especificação resumida

Aplicação privada para organizar prospecção, diagnóstico e venda de sites e SEO local no Brasil.

## Usuário e segurança

O acesso é privado e autenticado pelo Sites. Cada registro possui `owner_id`. A aplicação não coleta dados pessoais sensíveis e trabalha com contatos comerciais públicos. Registros marcados como “Não deseja contato” não podem receber novos contatos pelo CRM.

## Módulos

- Dashboard com indicadores calculados da base persistida.
- Cadastro, busca, deduplicação, importação e exportação de leads.
- Prospecção manual com registro de contato e abertura do WhatsApp.
- Funil Kanban com histórico de movimentações.
- Agenda com detecção de conflito de horário.
- Propostas, tarefas, clientes e controle financeiro em reais.
- Modo demonstração isolado e removível.
- Pontos de integração para DataForSEO e Google PageSpeed, bloqueados até a configuração de credenciais.

## Arquitetura

Vinext/Next.js, React, TypeScript, Tailwind CSS, Lucide, Recharts, Drizzle ORM e Cloudflare D1. A autenticação é fornecida pelo Sites, e as rotas de API validam o usuário no servidor.

## Regras críticas

- Não contabilizar proposta como receita recebida.
- Não iniciar consulta paga sem confirmação.
- Proteger exportações CSV contra injeção de fórmulas.
- Evitar duplicidade por empresa, cidade e proprietário.
- Usar o fuso `America/Sao_Paulo` na exibição de compromissos.

