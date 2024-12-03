function exibirMenu() {
    const escolha = prompt(
        "Bem-vindo ao restaurante!\n\nMenu:\n" +
        "1. Pizza - R$ 35,00 (Deliciosa massa com queijo, molho de tomate e seus toppings preferidos)\n" +
        "2. Hambúrguer - R$ 25,00 (Pão artesanal com carne suculenta, queijo, alface e tomate)\n" +
        "3. Salada - R$ 20,00 (Mix de folhas frescas, legumes e um molho especial)\n" +
        "4. Macarrão - R$ 30,00 (Massa al dente com molho à sua escolha: bolonhesa, branco ou pesto)\n\n" +
        "Digite o número do prato que deseja escolher:"
    );

    switch (escolha) {
        case "1":
            alert("Você escolheu Pizza.\nPreço: R$ 35,00\nDescrição: Deliciosa massa com queijo, molho de tomate e seus toppings preferidos.");
            break;
        case "2":
            alert("Você escolheu Hambúrguer.\nPreço: R$ 25,00\nDescrição: Pão artesanal com carne suculenta, queijo, alface e tomate.");
            break;
        case "3":
            alert("Você escolheu Salada.\nPreço: R$ 20,00\nDescrição: Mix de folhas frescas, legumes e um molho especial.");
            break;
        case "4":
            alert("Você escolheu Macarrão.\nPreço: R$ 30,00\nDescrição: Massa al dente com molho à sua escolha: bolonhesa, branco ou pesto.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um número entre 1 e 4.");
    }
}
exibirMenu();