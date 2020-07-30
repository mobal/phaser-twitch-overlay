import 'phaser';

export class Player {
    name: string
    texture: string
    speed: number
    sprite: Phaser.GameObjects.Sprite

    constructor(name: string, texture: string, sprite: Phaser.GameObjects.Sprite, speed: number = 32) {
        this.name = name
        this.texture = texture;
        this.speed = speed
        this.sprite = sprite;
    }
}
