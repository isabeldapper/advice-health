# App de Agendamentos

Este é um aplicativo de agendamentos desenvolvido com React, utilizando o Bootstrap para o layout e gerenciamento de estado com Context API. O objetivo do aplicativo é proporcionar uma interface para exibir e agendar compromissos, com uma visualização mensal no calendário, acesso rápido a notificações e a gestão de avisos.

## Funcionalidades

- **Calendário Mensal**: Exibe um calendário mensal, onde é possível visualizar listagem de compromissos por dia.
- **Tabela de Avisos**: Exibe uma tabela de avisos relacionados aos agendamentos e às rotinas gerais.
- **Acesso Rápido**: Interface intuitiva para acessar rapidamente recursos e funcionalidades.
- **Serviço de Notificações**: Notificações em tempo real para alertar o usuário sobre eventos e ações importantes.
- **Modal de Ação**: Modal para facilitar interações com o usuário, como adicionar ou editar eventos.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construir interfaces de usuário.
- **Bootstrap**: Framework CSS para construção rápida de layouts responsivos.
- **React Context API**: Gerenciamento de estado global para notificações (Toast) e modais de ação.
- **CSS Personalizado**: Estilos adicionais para personalizar a aparência do aplicativo.

## Instalação

1. Clone este repositório:

```bash
  git clone https://github.com/isabeldapper/advice-health.git
```


2. Navegue até a pasta do projeto:

```bash
  cd advice-health
```


3. Instale as dependências:

```bash
  npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

O aplicativo estará disponível em seu localhost.


## Estrutura do Projeto
```bash
/src
  /components
    /action-modal        # Componente de modal
    /calendar            # Componente de calendário mensal
    /footer              # Componente de rodapé
    /header              # Componente de cabeçalho
    /notice-table        # Tabela de avisos
    /quick-access        # Acesso rápido de funcionalidades
    /scheduling-form     # Formulário de agendamentos
    /toast-notification  # Notificações toast
    /waiting-list        # Lista de espera

  /context
    /action-modal.js     # Contexto para modais de ação
    /toast-context.js    # Contexto para notificações

  /global.css            # Estilos globais
  App.js                 # Componente principal
  main.js                # Ponto de entrada do aplicativo
```


## Contribuição
Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Fork este repositório.

2. Crie uma branch para a sua modificação:

```bash
  git checkout -b minha-nova-feature
```

3. Faça suas alterações e commit:

```bash
  git commit -am 'Adicionando uma nova funcionalidade'
```

4. Envie sua branch para o repositório remoto:

```bash
  git push origin minha-nova-feature
```

5. Abra um Pull Request detalhando as modificações realizadas.


## Licença
Este projeto está licenciado sob a MIT License.

