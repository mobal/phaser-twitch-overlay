import 'phaser';

export class Player {
    texture: string
    speed: number
    sprite: Phaser.GameObjects.Sprite

    constructor(texture: string, sprite: Phaser.GameObjects.Sprite, speed: number = 32) {
        this.texture = texture;
        this.speed = speed
        this.sprite = sprite;
    }
}
