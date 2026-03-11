# Plano de Refatoração dos Cards Flutuantes

## Etapa 1: Extração do Conteúdo Atual

### Cards Existentes

**Card Top (#card-top):**
- Ícone: `fas fa-rocket`
- Título: "Lançamento Rápido"
- Descrição: "Sites entregues em tempo recorde"

**Card Middle (#card-middle):**
- Ícone: `fas fa-mobile-alt`
- Título: "Design Responsivo"
- Descrição: "Perfeito em qualquer dispositivo"

**Card Bottom (#card-bottom):**
- Ícone: `fas fa-bullseye`
- Título: "Foco em Resultados"
- Descrição: "Estratégias para aumentar suas vendas"

---

## Etapa 2: Estrutura HTML Atual

```html
<div class="hero-visual">
    <div class="floating-card" id="card-top">
        <div class="floating-card-icon"><i class="fas fa-rocket"></i></div>
        <h4>Lançamento Rápido</h4>
        <p>Sites entregues em tempo recorde</p>
    </div>
    <div class="floating-card" id="card-middle">
        <div class="floating-card-icon"><i class="fas fa-mobile-alt"></i></div>
        <h4>Design Responsivo</h4>
        <p>Perfeito em qualquer dispositivo</p>
    </div>
    <div class="floating-card" id="card-bottom">
        <div class="floating-card-icon"><i class="fas fa-bullseye"></i></div>
        <h4>Foco em Resultados</h4>
        <p>Estratégias para aumentar suas vendas</p>
    </div>
</div>
```

**Posicionamento Atual (lines 359-375 do index.html):**
- Card Top: top: 5%, right: 5%
- Card Middle: top: 35%, right: -5%
- Card Bottom: bottom: 5%, right: 15%

---

## Etapa 3: Novo Posicionamento Estratégico

### Princípios de Posicionamento

1. **Fluxo Natural do Conteúdo:** Alinhar com a hierarquia visual da home
2. **Áreas de Destaque:** Posicionar em pontos estratégicos de atenção
3. **Equilíbrio Visual:** Distribuir os cards de forma harmônica
4. **Responsividade Garantida:** Adaptar para todos os dispositivos

### Novo Layout Proposto

| Card | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Card 1 | Superior esquerda | Relative top | Em coluna |
| Card 2 | Centro direita | Relative | Em coluna |
| Card 3 | Inferior esquerda | Relative | Em coluna |

---

## Etapa 4: Checklist de Implementação

### Fase 1: Remoção
- [ ] Remover CSS atual dos floating cards (lines 341-435)
- [ ] Remover HTML dos cards no .hero-visual
- [ ] Limpar referências residuais

### Fase 2: Recriação
- [ ] Criar nova estrutura HTML
- [ ] Implementar posicionamento estratégico
- [ ] Adicionar IDs únicos

### Fase 3: Responsividade
- [ ] Media query para 768px
- [ ] Media query para 480px
- [ ] Transições suaves entre breakpoints

### Fase 4: Validação
- [ ] Testar sobreposição de conteúdo
- [ ] Validar em diferentes dispositivos
- [ ] Verificar performance das animações
