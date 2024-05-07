import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {GameComponent} from "./features/game/game.component";
import {ThemeToggleComponent} from "./shared/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent, CommonModule, RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idlegame-web';
}
