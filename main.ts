sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy()
    dart.destroy(effects.fire, 100)
    info.changeScoreBy(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 7 7 7 7 . . . 
. . . . . . . . . 7 7 7 7 7 . . 
. . . . . . . . . 7 7 7 7 7 7 . 
8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 . 
. . . . . . . . . 7 7 7 7 7 . . 
. . . . . . . . . 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let bogey: Sprite = null
let mySprite: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . 8 8 4 4 . . . . . . . . . 
. . . 8 8 4 4 f f . . . . . . . 
. . . 8 8 4 4 . . . . . . . . . 
2 . . 8 8 7 7 7 . . . . . . . . 
4 2 8 8 8 7 7 7 7 7 . . . . . . 
4 2 8 8 8 7 7 7 7 7 7 7 . . . . 
2 . . 8 8 8 8 8 7 7 7 7 7 7 . . 
. . . 8 8 7 7 7 7 7 7 7 a a 7 7 
. . . 8 8 7 7 7 7 7 7 7 a a 7 7 
2 . . 8 8 8 8 8 7 7 7 7 7 7 . . 
4 2 8 8 8 7 7 7 7 7 7 7 . . . . 
4 2 8 8 8 7 7 7 7 7 . . . . . . 
2 . . 8 8 7 7 7 . . . . . . . . 
. . . 8 8 4 4 . . . . . . . . . 
. . . 8 8 4 4 f f . . . . . . . 
. . . 8 8 4 4 . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(mySprite, 200, 200)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
. . . . . . . . . . b b b . . . 
. . . . . . . . b e e 3 3 b . . 
. . . . . . b b e 3 2 e 3 a . . 
. . . . b b 3 3 e 2 2 e 3 3 a . 
. . b b 3 3 3 3 3 e e 3 3 3 a . 
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
b 3 3 3 d d d d 3 3 3 3 3 d d a 
b b b b b b b 3 d d d d d d 3 a 
b d 5 5 5 5 d b b b a a a a a a 
b 3 d d 5 5 5 5 5 5 5 d d d d a 
b 3 3 3 3 3 3 d 5 5 5 d d d d a 
b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
b b b 3 d 5 5 5 5 5 5 5 d d b a 
. . . b b b 3 d 5 5 5 5 d d 3 a 
. . . . . . b b b b 3 d d d b a 
. . . . . . . . . . b b b a a . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
