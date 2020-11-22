var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('paddleL', 'assets/paddleL.png');
    this.load.image('paddleR', 'assets/paddleR.png');
    this.load.image('ball', 'assets/ball.png');
}

function create ()
{
    //Create the background and setup input
    this.add.image(400, 300, 'sky');
    cursors = this.input.keyboard.createCursorKeys();

    //Setup the scoreboard
    var score = 0;
    var scoreTextL;
    var scoreTextR;
    scoreTextL = this.add.text(16, 16, '0', { fontSize: '32px', fill: '#000' });
    scoreTextR = this.add.text(764, 16, '0', { fontSize: '32px', fill: '#000' });

    //Create the paddles
    paddleL = this.physics.add.sprite(100, 300, 'paddleL');
    paddleL.setBounce(0.2);
    paddleL.setCollideWorldBounds(true);

    paddleR = this.physics.add.sprite(700, 300, 'paddleR');
    paddleR.setBounce(0.2);
    paddleR.setCollideWorldBounds(true);

    //Create the ball
    ball = this.physics.add.sprite(400, 300, 'ball');
    ball.setBounce(1);
    ball.setCollideWorldBounds(true);
    ball.setVelocity(Phaser.Math.Between(-200, 200), 50);
}

function update ()
{
    //Right Paddle movement
    if (cursors.up.isDown) {
    paddleR.setVelocityY(-150);
    }
    else if (cursors.down.isDown)
    {
    paddleR.setVelocityY(150);
    }
}