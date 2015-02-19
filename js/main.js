var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('background', 'assets/map5.jpg');
    game.load.image('dude', 'assets/dude.png');
    game.load.image('bird', 'assets/bird.png');

}

// EnemyBird = function (index, game, player) {

//     var x = game.world.randomX;
//     var y = game.world.randomY;

//     this.game = game;
//     this.player = player;
//     this.alive = true;

//     this.bird = game.add.sprite(x, y, 'bird', 'bird');

//     this.bird.anchor.set(0.5);

//     this.bird.name = index.toString();
//     game.physics.enable(this.bird, Phaser.Physics.ARCADE);
//     this.bird.body.immovable = false;
//     this.bird.body.collideWorldBounds = true;
//     this.bird.body.bounce.setTo(1, 1);

//     this.bird.angle = game.rnd.angle();

//     game.physics.arcade.velocityFromRotation(this.bird.rotation, 100, this.bird.body.velocity);

// };

// EnemyBird.prototype.update = function() {

//     this.bird.rotation = this.game.physics.arcade.angleBetween(this.bird, this.player);

//     if (this.game.physics.arcade.distanceBetween(this.bird, this.player) < 300)
//     {
//         var style = { font: "8px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
//         text = game.add.text(0, 0, "CAWWW", style);
//         text.anchor.set(0.5);
//     }

// };

var map;
var enemies;
var bird;
var bird2;
var bird3;
var bird4;
var player;
var cursors;
var bg;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    bg = game.add.tileSprite(0, 0, 800, 600, 'background');
   // bg.fixedToCamera = true;

    player = game.add.sprite(32, 32, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    cursors = game.input.keyboard.createCursorKeys();

    // enemies = [];
    // enemiesTotal = 5;
    // for (var i = 0; i < enemiestotal; i++) {
    //     enemies.push(new EnemyBird(i, game, player));
    // }
    // bird = game.add.sprit(60,60, 'bird');
    var x = game.world.randomX;
    var y = game.world.randomY;


    bird = game.add.sprite(x, y, 'bird');

    bird.anchor.set(0.5);
    game.physics.enable(bird, Phaser.Physics.ARCADE);
    bird.body.immovable = false;
    bird.body.collideWorldBounds = true;
    bird.body.bounce.setTo(1, 1);

    bird.angle = game.rnd.angle();

    game.physics.arcade.velocityFromRotation(bird.rotation, 100, bird.body.velocity);

    bird.prototype.update = function() {

        this.bird.rotation = this.game.physics.arcade.angleBetween(this.bird, player);

        if (this.game.physics.arcade.distanceBetween(this.bird, player) < 300)
        {
            var style = { font: "8px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
            text = game.add.text(0, 0, "CAWWW", style);
            text.anchor.set(0.5);
        }
    };

    // x = game.world.randomX;
    // y = game.world.randomY;

    // bird2 = game.add.sprite(x, y, 'bird');

    // bird2.anchor.set(0.5);
    // game.physics.enable(bird2, Phaser.Physics.ARCADE);
    // bird2.body.immovable = false;
    // bird2.body.collideWorldBounds = true;
    // bird2.body.bounce.setTo(1, 1);

    // bird2.angle = game.rnd.angle();

    // game.physics.arcade.velocityFromRotation(bird2.rotation, 100, bird2.body.velocity);

    // bird2.prototype.update = function() {

    //     this.bird2.rotation = this.game.physics.arcade.angleBetween(this.bird2, this.player);

    //     if (this.game.physics.arcade.distanceBetween(this.bird2, this.player) < 300)
    //     {
    //         var style = { font: "8px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
    //         text = game.add.text(0, 0, "CAWWW", style);
    //         text.anchor.set(0.5);
    //     }
    // };
    // x = game.world.randomX;
    // y = game.world.randomY;
    // bird3 = game.add.sprite(x, y, 'bird');

    // bird3.anchor.set(0.5);
    // game.physics.enable(bird3, Phaser.Physics.ARCADE);
    // bird3.body.immovable = false;
    // bird3.body.collideWorldBounds = true;
    // bird3.body.bounce.setTo(1, 1);

    // bird3.angle = game.rnd.angle();

    // game.physics.arcade.velocityFromRotation(bird3.rotation, 100, bird3.body.velocity);

    // bird3.prototype.update = function() {

    //     this.bird3.rotation = this.game.physics.arcade.angleBetween(this.bird3, this.player);

    //     if (this.game.physics.arcade.distanceBetween(this.bird3, this.player) < 300)
    //     {
    //         var style = { font: "8px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
    //         text = game.add.text(0, 0, "CAWWW", style);
    //         text.anchor.set(0.5);
    //     }
    // };
    // x = game.world.randomX;
    // y = game.world.randomY;
    // bird4 = game.add.sprite(60, 60, 'bird');

    // bird4.anchor.set(0.5);
    // game.physics.enable(bird4, Phaser.Physics.ARCADE);
    // bird4.body.immovable = false;
    // bird4.body.collideWorldBounds = true;
    // bird4.body.bounce.setTo(1, 1);

    // bird4.angle = game.rnd.angle();

    // game.physics.arcade.velocityFromRotation(bird4.rotation, 100, bird4.body.velocity);

    // bird4.prototype.update = function() {

    //     this.bird4.rotation = this.game.physics.arcade.angleBetween(this.bird4, this.player);

    //     if (this.game.physics.arcade.distanceBetween(this.bird4, this.player) < 300)
    //     {
    //         var style = { font: "8px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
    //         text = game.add.text(0, 0, "CAWWW", style);
    //         text.anchor.set(0.5);
    //     }
    // };
}

function update() {

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    // for (var i = 0; i < enemies.length; i++)
    // {
    //     if (enemies[i].alive)
    //     {
    //         game.physics.arcade.collide(player, enemies[i].bird);
    //         enemies[i].update();
    //     }
    // }
    bird.update();
     // bird2.update();
    // bird3.update();
    // bird4.update();

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -150;
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 150;
    }

}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}