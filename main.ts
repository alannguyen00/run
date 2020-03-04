namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
f f f f f f f f e f f f f f f f 
e e e e e e e f f f e e e e e e 
e e f e e e e e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e e f f f f f f 
e e e e e e e f f f f e e e e e 
e e e e e e e e e e e e e e e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
`
}
function main_character () {
    Carlos = sprites.create(img`
. . . . . f f f f f . . . . . . . 
. . . . f f d d d f f . . . . . . 
. . . . f d 1 d 1 d f . . . . . . 
. . . . d d f d f d d . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d f d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . . 
. . . . 5 5 1 1 1 5 5 . . . . . . 
. . . 5 5 5 1 2 1 5 5 5 . . . . . 
. . . 5 . 5 1 2 1 5 . 5 . . . . . 
. . . 5 . 5 1 1 1 5 . d . . . . . 
. . . d . 5 5 5 5 5 . d . . . . . 
. . . . . 8 8 8 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . f f f . f f f . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(Carlos, 70, 70)
    scene.cameraFollowSprite(Carlos)
    Carlos.setPosition(400, 750)
    Carlos.setKind(SpriteKind.Player)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . 1 1 . 1 f f 1 1 1 1 . . . . 
. . 1 1 f . 1 1 1 1 1 1 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f . f f . . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. 1 1 1 . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 8 8 . . . . . 
. . . . . . . . . . f f . . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . 1 . . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f . . 2 2 2 2 2 2 1 . . . . 
. 1 1 1 f . 2 2 2 2 2 2 2 . . . . 
. 1 1 . d d 2 2 2 2 2 2 2 . . . . 
. 1 . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . d . . . d d d d . . d . . . . 
. . d d . . 5 5 5 5 . d d . . . . 
. . . d d 5 5 5 5 5 5 d . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f 8 8 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d d . . . . 
. . . d . . 5 5 5 5 . . d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function defense_gun () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
}
function bad_guy () {
    Villan = sprites.create(img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . 2 e 2 2 2 2 e 2 . f 1 1 
. . . . 2 2 2 e 2 2 e 2 2 d d . . 
. . . d d 2 2 2 e e 2 2 d d f . . 
. . d d 2 2 2 2 e e 2 2 2 . . . . 
. . d . . 2 2 2 e e 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
    Villan.setPosition(400, 600)
    Villan.follow(Carlos, 60)
    Villan.setKind(SpriteKind.Enemy)
}
function background () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b e e b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f 
f b e e b b b b b b b b b b b b b b b b b f f b b b b b b b b b b b b b b b b b b b b b b b b f b f 
f b e e 7 e e e e e e e e e e e e e e e b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e 7 e e e e e e e e e e 1 e e e 1 b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e b b b b b b b b b b b b b b e e b f f b e e b b b b b b b b b b b b b b b b b b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b b b b b b b b b b b b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b 1 e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e 1 b f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b b b b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e e e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e 1 e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e 1 e e b b b b b b b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b b b b b b b b b e e b e e e b b b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e b b b e e b f b f 
f b e e b b b b b b b b b b b b b b b b b b b b e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b b b b e e e b f b e e b f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b b b b e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e b b b b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e b f b b b b f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e e e e e e e b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e e e e e e e b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b b b b b b b b b b b b b e e b b b b b b b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b b b b b b b b b b b b b b b b b b b b b b b e e b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, true)
    scene.setTile(7, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, false)
    scene.setTile(14, img`
e e f e e e e e e e e e e e e e 
e e e e e e e e e f e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e f f f f f f f 
e e e f e e e f f f e e e e e e 
e e e e e e e e e e e e e f e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e f f f f e e e e e e e e e e 
f f f e e f f f f f f f f f f f 
e e e e e e e e e e e e e f e e 
e f e e e e e e e e e e e e e e 
e e e e e e e f e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e f f 
e e e e e f e e e e e e e e e e 
`, false)
    scene.setTile(1, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f . f f f . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . f 
. . . . . . 1 1 1 1 1 1 1 . . f 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 f f f . . . . 
. . . . . . f f f . . . . . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 . . f . 
. . . . . . 2 2 2 2 2 2 1 . f 1 f 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d 1 1 
. . . . . . 2 2 2 2 2 2 d d f . 1 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f 8 f f f . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 f . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . f f f f . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . f 8 8 . . . . . . . . 
. . . . . . f f f . . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . f . 8 8 f f . . . . . . 
. . . . . f f 8 8 . . . . . . . . 
. . . . . . f f . . . . . . . . . 
`],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 2 2 2 2 2 2 . . f 1 . 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . 1 1 
. . . . . 2 2 2 2 2 2 2 2 d . 1 1 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . d . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 f f f . . . . . 
. . . . . . f f f . . . . . . . . 
`, img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
let mySprite: Sprite = null
let Villan: Sprite = null
let Carlos: Sprite = null
main_character()
background()
bad_guy()
forever(function () {
	
})
