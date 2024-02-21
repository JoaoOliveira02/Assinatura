function baixarImagem(){
     // Obter o nome desejado para o download
     var nomeParaDownload = "Assinatura.png";
        
     // Criar um link de download programaticamente
     var link = document.createElement('a');
     link.href = canvas.toDataURL(); // Converte o conteúdo do canvas para uma URL de dados
     link.download = nomeParaDownload; // Nome personalizado para o download
     link.click(); // Clique automaticamente no link para iniciar o download
}