function gerarImagem() {
    //Obtém o elemento canvas do documento HTML pelo seu ID 'canvas'
    var canvas = document.getElementById('canvas');
    //Obtém o contexto de renderização 2D do canvas, que permite desenhar nele
    var ctx = canvas.getContext('2d');

    // Essas linhas limpam o canvas e definem o fundo como branco
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var imagem = new Image();
    imagem.src = 'img/lg.png'; // Caminho relativo para a imagem

    imagem.setAttribute('crossorigin', 'anonymous');
    
     imagem.onload = function() {
        //Esta linha desenha a imagem carregada no contexto do canvas
        ctx.drawImage(imagem, 20, 10, 190, 180);

        // Essas linhas desenham uma linha vertical separadora
        ctx.beginPath();
        ctx.moveTo(230, 205); 
        ctx.lineTo(230, 0); 

        //Essas linhas definem a largura da linha e sua cor como preto
        var larguraLinha = 3;
        ctx.lineWidth = larguraLinha;
        ctx.strokeStyle = 'black'; // Cor da linha (pode ser ajustada)
        ctx.stroke();

        // Essas linhas obtêm os valores dos elementos do formulário e armazenam em variáveis
        var nome = document.getElementById('nome').value.toUpperCase();
        var cargo = document.getElementById('cargo').value.toUpperCase();
        var setor = document.getElementById('setor').value.toUpperCase();
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var logradouro = document.getElementById('logradouro').value;
        var numero = document.getElementById('numero').value;
        var cep = document.getElementById('cep').value;
        var bairro = document.getElementById('bairro').value;
        var cidade = document.getElementById('cidade').value;
        
        //Esta linha define a distância horizontal para o desenho dos textos.
        var distanciaX = 255;

        // Essas linhas desenham os textos correspondentes aos valores do formulário no contexto do canvas, utilizando as variáveis obtidas anteriormente
        ctx.font = '1.5em Arial';
        ctx.fillStyle = 'black';  // Defina a cor do texto conforme necessário para contraste
        ctx.fillText(nome, distanciaX, 35);
        ctx.font = '1em Arial';
        ctx.fillText(cargo + ' / ' + setor, distanciaX, 55);
        ctx.font = '0.8em Arial';
        ctx.fillText(email, distanciaX, 95);
        ctx.fillText('Tel: +55 (11) ' + telefone, distanciaX, 115);
        ctx.fillText(logradouro + ', ' + numero, distanciaX, 135);
        ctx.fillText(cep + ' | ' + bairro + ', ' + cidade + ' - SP', distanciaX, 155);
        ctx.fillText('www.prefeitura.sp.gov.br', distanciaX, 175);
    }
}  