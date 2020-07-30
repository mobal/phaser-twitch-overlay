import 'phaser';
import { Player } from '../model/Player';

export class GameScene extends Phaser.Scene {
    max: number = 20
    ;
    
    debug!: Phaser.GameObjects.Text
    warrior!: Phaser.GameObjects.Sprite;
    wolf!: Phaser.GameObjects.Sprite;

    players: Array<Player> = [];
    sprites: Array<string> = [
        'Bandit01',
        'Bandit02',
        'BigGuy',
        'Gorilla',
        'Princess',
        'Warrior',
        'Wolf'
    ];

    constructor() {
        super({
            key: 'GameScene'
        });
    }

    private addPlayer(sprite: string, x: number, y: number) {
        this.players.push(new Player(sprite, this.add.sprite(x + 32, y, 'atlas', `Idle/__${sprite}_Idle_000.png`), this.getRandom(8, 64)));
    }

    private createAnimation(sprite: string) {
        this.anims.create({
            key: `${sprite}-Run`,
            frames: this.anims.generateFrameNames(
                'atlas', {
                    start: 1,
                    end: 11,
                    zeroPad: 3,
                    prefix: `Run/__${sprite}_Run_`,
                    suffix: '.png'
                }
            ),
            frameRate: 10,
            repeat: -1
        });
    }

    private getRandom(min: number = 64, max: number = 128) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    create() {
        const { width, height } = this.sys.game.canvas;
        
        this.debug = this.add.text(0, 0, '0', { color: '#000000' });
        this.sprites.forEach(sprite => this.createAnimation(sprite));

        for (let i = 0; i < this.max; i++) {
            this.addPlayer(this.sprites[Math.floor(Math.random() * this.sprites.length)], Math.floor(Math.random() * width) + 1, height / 2);
        }
        
        this.players.forEach(player => {
            player.sprite.setScale(0.2, 0.2);
        });

        this.players.forEach(player => {
            player.sprite.play(`${player.texture}-Run`, true);
        });
    }

    preload() {
        this.load.multiatlas('atlas', 'assets/sprites/Warrior/Warrior.json', 'assets/sprites/Warrior');
    }

    update(time: number, delta: number) {
        const { width } = this.sys.game.canvas;

        this.players.map(player => ({speed: player.speed, sprite: player.sprite }))
        .forEach(e => {
            if (width < (e.sprite.x + 100)) {
                e.sprite.flipX = true;
            } else if ((e.sprite.x - 100) < 0) {
                e.sprite.flipX = false;
            }

            if (e.sprite.flipX == false) {
                e.sprite.x += delta / e.speed;
            } else {
                e.sprite.x -= delta / e.speed;
            }
        });

        this.debug.setText(`fps: ${Math.floor(this.game.loop.actualFps)}, delta: ${Math.floor(delta)} ms`);
    }
}
