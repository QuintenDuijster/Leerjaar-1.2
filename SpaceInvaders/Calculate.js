class Calculations {
    constructor() {
        this.deltaTime = 0;
        this.lastTimestamp = 0;
        this.fpc = 0;
        this.fps = 0;
    }

    startCal = (timestamp) => {
        this.calDeltaTime(timestamp);

        setInterval(() => { this.fps = this.fpc; this.fpc = 0; }, 1000);

        this.fpc++;

        requestAnimationFrame(this.startCal);
    }

    calDeltaTime(timestamp) {
        if (!this.lastTimestamp) this.lastTimestamp = timestamp;

        this.deltaTime = (timestamp - this.lastTimestamp) / 1000;
        this.lastTimestamp = timestamp;
    }
}

const cal = new Calculations();

cal.startCal();