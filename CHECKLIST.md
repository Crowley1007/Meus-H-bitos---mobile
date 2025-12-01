# Checklist de Testes Manuais

Este documento lista os casos de teste executados para validação das funcionalidades do aplicativo "Diário de Hábitos", conforme exigido para AV2 de Mobile.

| ID | Cenário de Teste | Ação | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :--- |
| **C1** | Criação de Hábito | Clicar em '+' e salvar um novo hábito (ex: "Beber Água"). | O hábito aparece na Home Screen com status "Ativo". | OK |
| **C2** | Leitura/Visualização | Abrir o aplicativo. | Todos os hábitos criados e ativos são exibidos corretamente. | OK |
| **C3** | Marcação Diária | Clicar no ícone de check de um hábito ativo. | O hábito fica marcado como concluído (riscado) para o dia atual. | OK |
| **C4** | Desmarcação Diária | Clicar novamente no ícone de check de um hábito concluído. | A marcação de conclusão é removida. | OK |
| **C5** | Edição de Hábito | Clicar em um hábito, alterar o nome/meta/frequência e salvar. | Os dados do hábito são atualizados na Home Screen. | OK |
| **C6** | **Persistência de Dados** | **Ação:** Criar hábito, marcar como concluído, **fechar e reabrir o app.** | Os hábitos criados e as marcações de conclusão permanecem salvas (AsyncStorage). | OK |
| **C7** | **Arquivamento** | Na Home, editar um hábito e marcar como "Arquivado". | O hábito desaparece da Home Screen e aparece na lista de arquivados em Configurações. | OK |
| **C8** | **Desarquivamento** | Na tela de Configurações, usar o botão "Desarquivar" (ou a função de reativação) em um hábito arquivado. | O hábito volta a aparecer na Home Screen como "Ativo". | OK |
| **C9** | Exclusão de Hábito | Clicar em um hábito, entrar no Modal de Edição e usar o botão de Excluir. | O hábito é removido do aplicativo e não aparece mais em nenhuma lista. | OK |
| **C10** | **Limpar Todos os Dados** | Na tela de Configurações, clicar em "Limpar Todos os Dados" e confirmar. | Todos os hábitos são removidos e o app retorna ao estado inicial. | OK |