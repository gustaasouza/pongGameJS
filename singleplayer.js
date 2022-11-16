//Variaveis bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 

//Velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

//Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da Raquete oponente
let xRaqueteB = 585;
let yRaqueteB = 150;
let velocidadeYOponente;
let colidiu = false;

//Placar
let meusPontos = 0;
let pontosOponente = 0;

//Som

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound('trilha.mp3')
  ponto = loadSound('ponto.mp3')
  raquetada = loadSound('raquetada.mp3')
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  raquete(xRaquete, yRaquete);
  raquete(xRaqueteB, yRaqueteB);
  moverRaquete();
  moverRaqueteOponente();
  colisaoMinhaRaquete(xRaquete, yRaquete);
  colisaoMinhaRaquete(xRaqueteB, yRaqueteB);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(16);
  stroke(255);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  rect(150, 10, 40, 20);
  fill(255)
  text(meusPontos, 170, 26);
  text(pontosOponente, 470, 26);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function raquete(x, y){
  rect(x,y,raqueteComprimento, raqueteAltura);

}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function moverRaquete(){
  if (keyIsDown(87)){
   yRaquete -= 10
 
  } 
  if (keyIsDown(83)){
   yRaquete += 10
 
  } 
 }
 
 function moverRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteB - raqueteComprimento /2 - 85;
  yRaqueteB += velocidadeYOponente
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  }  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function colisaoMinhaRaquete(x, y){
  colidiu =
  collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
    if (colidiu){
      velocidadeXBolinha *= -1
      raquetada.play();
    }
}

function marcaPonto(){
  if (xBolinha > 594){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
