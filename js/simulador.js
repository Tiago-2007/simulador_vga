// Seleciona o elemeto canvas e define o contexto 2D
const canvas = document.getElementById('vgaCanvas');
const ctx = canvas.getContext('2D');

// Tamanho do VGA em pixels para 16 cores
const WIDTH = 640;
const HEIGHT =480;

// Paleta típica do VGA para 16 cores do VGA (em hexadecimal)
const colors = [
    '#000000', '#00000A', '#00AA00', '#00AAAA', '#AA0000',
    '#AA00AA', '#AA5500', '#AAAAAA', '#555555', '#5555FF',
    '#55FF55', '#55FFFF', '#FF5555', '#FF55FF', '#FFFF55',
    '#FFFFFF'
 ];

// Array de imageData gerado da imagem fornecida (exemplo simplicado)
// Este array conterá 480 linhas, cada uma imagem com 640 pixels (valores de 0 a 15)
const imageData = new Array(HEIGHT).fill().map(() =>
    new Array(WIDTH).fill().map(() => Math.floor(Math.random() * 16))
);

// Função para desenhar a imagem no canvas usando os dados array
function drawImagePattern() {
    for(let y= 0; y < HEIGHT; y++) {
        for(let x = 0; x < WIDTH; x++) {    
            const colorIndex = imageData[y][x];
            ctx.fillStyle = colors[colorIndex];
            ctx.fillRect(x,y,1, 1); //Desenha um pixel 1x1
        }    
    }    
}

drawImagePattern();