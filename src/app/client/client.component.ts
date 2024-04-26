import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class ClientComponent {}
