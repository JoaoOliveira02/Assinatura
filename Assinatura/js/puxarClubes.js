function carregarInfoClube() {
    //Esta linha obtém o valor do elemento de formulário com o ID 'clube'
    var clubeSelecionado = document.getElementById('clube').value;
    //Aqui, a função obterInfoClube(clubeSelecionado) é chamada para obter informações do clube selecionado
    var infoClube = obterInfoClube(clubeSelecionado);

    //Essas linhas atribuem os valores das propriedades do objeto infoClube aos elementos correspondentes do formulário
    document.getElementById('nome').value = infoClube.nome || '';
    document.getElementById('cargo').value = infoClube.cargo || '';
    document.getElementById('setor').value = infoClube.setor || '';
    document.getElementById('email').value = infoClube.email || '';
    document.getElementById('telefone').value = infoClube.telefone || '';
    document.getElementById('logradouro').value = infoClube.logradouro || '';
    document.getElementById('numero').value = infoClube.numero || '';
    document.getElementById('cep').value = infoClube.cep || '';
    document.getElementById('bairro').value = infoClube.bairro || '';
    document.getElementById('cidade').value = infoClube.cidade || '';
}


function obterInfoClube(clube) {
    switch (clube) {
        case 'clube':
            return {
                logradouro: '',
                numero: 1000,
                cep: '',
                bairro: '',
                cidade: ''
            };
        case 'clube1':
            return {
                logradouro: 'Rua Tall',
                numero: 1100,
                cep: '00000-000',
                bairro: 'Vila Olinda',
                cidade: 'São Paulo'
            };
        case 'clube2':
            return {
                logradouro: 'Av. Tosta',
                numero: 12100,
                cep: '00000-100',
                bairro: 'Vila Dalvo',
                cidade: 'São Paulo'
            };
        case 'clube3':
            return {
                logradouro: 'Alameda João',
                numero: 3100,
                cep: '00000-200',
                bairro: 'Ibirapuera',
                cidade: 'São Paulo'
            };
        default:
            return {};
    }
}