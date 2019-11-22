export default class Barra extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
    }

    ReduceBarra(porcentaje){
        this.width = this.width*porcentaje;
    }
}