# Status de implementação

Atualizado em 24/11/2026.

## Concluído — fundação funcional

- [x] Site privado e autenticação obrigatória.
- [x] Banco D1 com leads, reuniões, propostas, lançamentos, tarefas e atividades.
- [x] Isolamento de registros por usuário autenticado.
- [x] Dashboard com indicadores reais da base.
- [x] Cadastro manual, pesquisa e deduplicação de leads.
- [x] Funil Kanban com persistência e histórico.
- [x] Agenda com verificação de conflito exato.
- [x] Propostas, financeiro, tarefas, clientes e relatórios básicos.
- [x] Importação CSV e exportação protegida contra injeção de fórmulas.
- [x] Modo demonstração identificável e removível.
- [x] Interface responsiva, tema claro/escuro e sidebar recolhível.
- [x] Login mestre com sessão HttpOnly assinada e limite de tentativas.
- [x] Persistência privada na Vercel por meio do Vercel Blob.

## Implementado, aguardando credenciais

- [ ] DataForSEO para mineração orgânica/local.
- [ ] Google PageSpeed Insights para auditorias verificadas.

## Próximas fases

- [ ] Fila persistente com retentativas para mineração e auditorias em lote.
- [ ] Auditoria SEO completa, scoring configurável e relatório PDF.
- [ ] Propostas em PDF, ICS e integrações opcionais de calendário.
- [ ] Paginação no servidor e mapeador visual de colunas na importação.
- [ ] Testes Vitest/Playwright e cobertura ampliada dos fluxos.
- [ ] Integração opcional com Supabase/Vercel se o projeto migrar para hospedagem externa ao Sites.

