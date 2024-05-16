import {Component, OnInit} from '@angular/core';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'idle-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  count = 0;

  intervalId: number | null = null;

  clickGadgets = {
    doubleTap: {
      num: 0,
      cost: 10
    },
    autoClicker: {
      num: 0,
      cost: 100
    },
    luckyFinger: {
      num: 0,
      cost: 1000
    }
  };

  get gadgetNum() {
    return this.clickGadgets.doubleTap.num + this.clickGadgets.autoClicker.num + this.clickGadgets.luckyFinger.num;
  }

  clickButton() {
    this.count += getRandomInt(1, 1 + this.clickGadgets.luckyFinger.num);
  }

  autoClickButton() {
    this.clickButton();
  }

  manualClickButton() {
    this.clickButton();
    this.count += this.clickGadgets.doubleTap.num;
  }

  ngOnInit() {
    this.adjustInterval();
  }

  buyDoubleTapGadget() {
    if (this.count >= this.clickGadgets.doubleTap.cost) {
      this.count -= this.clickGadgets.doubleTap.cost;
      this.clickGadgets.doubleTap.num += 1;
      this.clickGadgets.doubleTap.cost *= 2;
    }
  }

  buyAutoClicker() {
    if (this.count >= this.clickGadgets.autoClicker.cost) {
      this.count -= this.clickGadgets.autoClicker.cost;
      this.clickGadgets.autoClicker.num += 1;
      this.clickGadgets.autoClicker.cost *= 2;
      this.adjustInterval();
    }
  }

  buyLuckyFinger() {
    if (this.count >= this.clickGadgets.luckyFinger.cost) {
      this.count -= this.clickGadgets.luckyFinger.cost;
      this.clickGadgets.luckyFinger.num += 1;
      this.clickGadgets.luckyFinger.cost *= 2;
    }
  }

  adjustInterval() {
    if (this.gadgetNum === 0) return;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => this.autoClickButton(), 1000/this.gadgetNum);
  }
}
