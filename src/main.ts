import 'phaser';

import { GameScene } from './scenes/GameScene';

const config: Phaser.Types.Core.GameConfig = {
    backgroundColor: '#ffffff',
    physics: {
        arcade: {
            debug: true
        },
        default: 'arcade'
    },
    render: {
        antialias: true,
        pixelArt: false
    },
    scale: {
        height: window.innerHeight,
        width: window.innerWidth
    },
    scene: [
        GameScene
    ],
    title: 'Twitch Overlay',
    type: Phaser.AUTO
};

export default class Main extends Phaser.Game {
    constructor() {
        super(config)
    }
}

window.addEventListener('load', () => {
    console.info('TwitchOverlay', config);
    new Main();
});
