# SEO e catálogo nacional — Vercel

Usar as fontes públicas reais da empresa: todos os 158 produtos das duas planilhas, descrições e atributos públicos, dados empresariais fornecidos e cadastro oficial de municípios do IBGE. Nenhum custo, fornecedor, cliente ou sessão WhatsApp entra no projeto.

Arquitetura: home institucional; catálogo completo com páginas HTML de produto; categorias; atendimento nacional; diretório de estados e municípios; página local de Uberlândia com as condições locais efetivamente informadas. Produtos permitem escolher qualquer cidade e solicitar orçamento contextualizado no WhatsApp. Não publicar centenas de milhares de cópias produto × cidade sem informação local diferenciada; novas páginas locais indexáveis exigem revisão editorial e evidências de atendimento, logística ou conteúdo útil específico.

Implementação: gerador estático Node, HTML com conteúdo sem depender de JS, títulos/descrições únicos, canonicals absolutos somente quando SITE_URL real estiver definido, Organization/WebSite/Product/BreadcrumbList e ItemList, sitemaps por tipo, robots, 404 real e links internos. Não inventar avaliações, imagens de SKU, frete, filial ou prazo. Produto sem fotos não receberá imagem ilustrativa como se fosse foto do SKU. Preço/estoque são snapshot da planilha e devem ser confirmados no atendimento; não prometer elegibilidade a rich results.

Hospedagem e dados: somente Vercel, conforme decisão do operador. Catálogo versionado no GitHub; HTML gerado em build. Não ativar Firebase nem criar recursos Google Cloud.

Publicação: enviar código ao repositório criado; Vercel gera dist automaticamente. Search Console exige domínio e verificação do proprietário; sitemap não garante indexação, e nenhuma ferramenta garante posicionamento rápido.

Critérios de conclusão: geração de todas as páginas de produto e estados; cobertura de todos os municípios na seleção; HTML/JSON-LD/canonical/sitemap testados; referências públicas verificadas; GitHub com commit verificável; publicação na Vercel reportada somente após confirmação da API e HTTP público.
