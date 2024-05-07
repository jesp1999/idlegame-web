import { Component } from '@angular/core';

@Component({
  selector: 'game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  count = 0;

  incrementCount() {
    this.count++;
  }
}
