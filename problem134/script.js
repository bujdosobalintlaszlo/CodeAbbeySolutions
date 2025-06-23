function main() {
    const input = '34 15 9'; 
    const [width, height, length] = input.split(' ').map(Number);

    const ss = new ScreenSaver(width, height, length);

    for (let i = 0; i < 101; i++) {
        process.stdout.write(`${ss.x} ${ss.y} `);
        ss.update();
    }
    console.log();
}

class ScreenSaver {
    constructor(width, height, length) {
        this.width = width;
        this.height = height;
        this.length = length;
        this.x = 0;
        this.y = 0;
        this.left = false;
        this.right = true;
        this.up = false;
        this.down = true;
    }

    update() {
        if (this.left) {
            this.goLeft();
        } else if (this.right) {
            this.goRight();
        }

        if (this.up) {
            this.goUp();
        } else if (this.down) {
            this.goDown();
        }
    }

    goLeft() {
        if (this.x - 1 >= 0) {
            this.x -= 1;
        } else {
            this.left = false;
            this.right = true;
            this.goRight();
        }
    }

    goRight() {
        if (this.x + this.length < this.width) {
            this.x += 1;
        } else {
            this.left = true;
            this.right = false;
            this.goLeft();
        }
    }

    goUp() {
        if (this.y - 1 >= 0) {
            this.y -= 1;
        } else {
            this.up = false;
            this.down = true;
            this.goDown();
        }
    }

    goDown() {
        if (this.y + 1 < this.height) {
            this.y += 1;
        } else {
            this.up = true;
            this.down = false;
            this.goUp();
        }
    }
}

main();
