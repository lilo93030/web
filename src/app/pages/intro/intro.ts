import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class IntroComponent {

}
