import 'phaser';

export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    create() {
        this.add.sprite(200, 200, 'bandit');
    }

    preload() {
        this.load.image('bandit', '/assets/sprites/__Bandit01_Idle_000.png');
    }

    update() {
        //
    }
}
