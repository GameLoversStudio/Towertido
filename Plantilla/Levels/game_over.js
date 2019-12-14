export default class GameOver extends Phaser.Scene{
    constructor() {
        super({ key: 'GameOver' });
      }

      preload(){
        this.load.image("fondo", "./Assets/Images/fondo.png");
        this.load.image("gameover","./Assets/Images/gameover.png");
        this.load.image("boton_menu","./Assets/Images/botonMenu.png");
        this.load.image("boton_rein","./Assets/Images/botonReiniciar.png");
      }

      create(){
        this.fondo = this.add.image(960, 525, "fondo");
        this.gameover = this.add.image(960,400, "gameover");

         //Boton para volver al Menu
        this.boton_menu = this.add.image(650,800, "boton_menu").setInteractive();
        this.boton_menu.on('pointerdown', pointer => {
            this.scene.start('Menu');
        });
        
        //Boton para volver a jugar
        this.boton_rein = this.add.image(1270,800, "boton_rein").setInteractive();
        this.boton_rein.on('pointerdown', pointer => {
            this.scene.start('Nivel0');
        }); 
      }
}