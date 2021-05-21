class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.start();
  }

  start() {
    const refs = {
      daysClock: document.querySelector(`${this.selector} [data-value="days"]`),
      hoursClock: document.querySelector(
        `${this.selector} [data-value="hours"]`,
      ),
      minsClock: document.querySelector(`${this.selector} [data-value="mins"]`),
      secsClock: document.querySelector(`${this.selector} [data-value="secs"]`),
    };

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      if (time < 1000) {
        clearInterval(this.intervalId);
      }

      refs.daysClock.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      refs.hoursClock.textContent = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      refs.minsClock.textContent = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      refs.secsClock.textContent = String(
        Math.floor((time % (1000 * 60)) / 1000),
      ).padStart(2, '0');
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('00:00 Aug 29, 2021'),
});
