import 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    backgroundColor: '#000000',
    physics: {
        arcade: {
            debug: true
        },
        default: 'arcade'
    },
    scale: {
        height: 1080,
        width: 1920
    },
    title: 'Twitch Overlay',
    type: Phaser.AUTO
};

export default class Main extends Phaser.Scene {
    constructor() {
        super('config')
    }

    public create() {
        let square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
        this.physics.add.existing(square)
    }

    public update() {
        //
    }
}
