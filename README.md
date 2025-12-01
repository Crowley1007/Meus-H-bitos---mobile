# Diário de Hábitos - Projeto AV2 Mobile

## Visão Geral do Projeto

Esta é uma aplicação mobile desenvolvida em **React Native (Expo)** para a disciplina de [Nome da Disciplina]. O objetivo é permitir que o usuário crie, visualize, edite e acompanhe seus hábitos diários.

A aplicação implementa as funcionalidades essenciais de **CRUD (Criação, Leitura, Atualização e Deleção)**, além de persistir os dados localmente usando **AsyncStorage** e utilizar os componentes nativos exigidos pela avaliação.

## Funcionalidades e Componentes Implementados

### Funcionalidades Essenciais

* **CRUD Completo:** Criação, edição e exclusão de hábitos.
* **Checklist Diário:** Marcação de conclusão de hábitos para o dia atual.
* **Arquivamento:** Permite desativar hábitos (Arquivar) para limpar a tela principal, com a opção de reativá-los (Desarquivar) na tela de Configurações.
* **Persistência de Dados:** Todos os hábitos e os registros de conclusão são salvos e carregados automaticamente no dispositivo usando AsyncStorage.

### Componentes Nativos 

O projeto cumpre a exigência de utilizar os seguintes componentes do React Native:

* `ScrollView`: Utilizado nas telas que podem ter conteúdo extenso (Configurações e Modal de Edição).
* `FlatList`: Utilizado na Home Screen para listar os hábitos de forma performática.
* `Modal`: Utilizado para exibir o formulário de criação/edição de hábitos.
* `Switch`: Utilizado dentro do Modal para controlar o status de Ativo/Arquivado do hábito.
* `Picker`: Utilizado no formulário para selecionar a frequência ou categoria do hábito.
* `Slider`: Utilizado no formulário para definir a meta numérica do hábito (ex: quantidade de água, tempo de leitura).

## 🔗 Links de Acesso

| Recurso | Link | Observação |
| :--- | :--- | :--- |
| **Código Fonte (GitHub)** | `https://github.com/Crowley1007/Meus-H-bitos---mobile` | Repositório principal com o histórico de commits. |
| **Link do Expo** | `https://expo.dev/@crowley07/meuapp` | Link público para visualização no aplicativo Expo Go. |

## 🛠️ Instruções de Execução (Para Rodar Localmente)

Para rodar o projeto em sua máquina, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o Node.js e o Git instalados.
2.  **Clonar Repositório:**
    ```bash
    git clone [https://github.com/Crowley1007/Meus-H-bitos---mobile.git](https://github.com/Crowley1007/Meus-H-bitos---mobile.git)
    cd Meus-H-bitos---mobile
    ```
3.  **Instalar Dependências:**
    ```bash
    npm install
    # ou, se preferir usar Yarn:
    # yarn install 
    ```
4.  **Iniciar o Projeto:**
    ```bash
    npx expo start
    ```
    O terminal exibirá um QR Code. Use o aplicativo **Expo Go** no seu celular para escanear o código e visualizar a aplicação.

---

## 👨‍💻 Autor

Desenvolvido por: [Seu Nome/Usuário]