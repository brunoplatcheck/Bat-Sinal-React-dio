# Desafio do Bat Sinal

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-green" alt="Status: Concluído" />
  <img src="https://img.shields.io/badge/Tecnologia-React_Native-blue" alt="Tecnologia: React Native" />
  <img src="https://img.shields.io/badge/Plataforma-Expo-lightgrey" alt="Plataforma: Expo" />
</p>

### Visão Geral

Este projeto é a solução para o **Desafio do Bat Sinal**, proposto pelo instrutor Felipão e a plataforma **DIO**. O objetivo foi criar um aplicativo mobile utilizando React Native e Expo com duas telas principais: uma tela inicial com um botão para ativar o sinal e uma tela de formulário para coletar dados. A tela pode ser personalizada à vontade, então foi aplicado um design com tema escuro e elementos visuais do universo do Batman.

---

### Funcionalidades

O aplicativo possui as seguintes funcionalidades:

* **Telas:** Implementação de duas telas, uma de ativação (TELA 1) e um formulário (TELA 2).
* **Navegação Simples:** Ao clicar no botão "Ativar BatSinal", a tela de ativação é substituída pelo formulário.
* **Design Personalizado:** Tema escuro com fundo preto, texto principal branco e botões com cores contrastantes (amarelo e azul).
* **Formulário:** Coleta de dados como nome, telefone, localização e observação, conforme o desafio.
* **Persistência de Dados:** Os dados inseridos no formulário são salvos localmente no dispositivo em formato JSON utilizando `AsyncStorage`.
* **Alerta de Sucesso Personalizado:** Em vez do alerta nativo, um modal customizado é exibido para confirmar o sucesso do envio. O modal é quadrado, com borda amarela, fundo cinza e texto azul, e um botão "OK" azul com texto amarelo.
* **Feedback Visual:** A imagem do radar é exibida na tela inicial, entre o logo do Batman e o botão.
* **Gestão de Teclado:** O teclado é fechado ao clicar em qualquer área da tela que não seja um campo de input.
* **Efeito Visual:** O botão "Ativar BatSinal" na tela inicial possui um contorno (ou "eco") amarelo, criando um efeito de destaque sem usar uma borda tradicional.

---

### Screenshots

| Tela Inicial                               | Modal de Sucesso                              |
| ------------------------------------------ | --------------------------------------------- |
| ![tela-inicial](https://raw.githubusercontent.com/brunoplatcheck/Bat-Sinal-React-dio/main/assets/tela-inicial.jpeg) | ![modal-sucesso](https://raw.githubusercontent.com/brunoplatcheck/Bat-Sinal-React-dio/main/assets/modal-sucesso.jpeg) |

<br/>

| Formulário |
|:---:|
| ![tela-form](https://raw.githubusercontent.com/brunoplatcheck/Bat-Sinal-React-dio/main/assets/tela-form.jpeg) |

---

### Tecnologias Utilizadas

* **React Native**
* **Expo**
* **TypeScript**
* **@react-native-async-storage/async-storage**

---

### Instalação e Execução

Para clonar e rodar o projeto em seu ambiente local:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/brunoplatcheck/Bat-Sinal-React-dio.git](https://github.com/brunoplatcheck/Bat-Sinal-React-dio.git)
    cd Bat-Sinal-React-dio
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Execute o aplicativo:
    ```bash
    npx expo start
    ```
    Isso iniciará o servidor do Expo. Você pode escanear o QR Code com o aplicativo Expo Go no seu celular ou abrir em um simulador.

4.  Para testar em um dispositivo físico fora da sua rede Wi-Fi, use o modo túnel:
    ```bash
    npx expo start --tunnel
    ```

---
