import { Component, OnInit, inject } from '@angular/core';
import { of } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { CardsComponent } from '../../cources/cards/cards.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  imports: [SharedModule, CardsComponent],
})
export class PopularComponent implements OnInit {
  ngOnInit(): void {}

  $popular = of([
    {
      id: '1',
      image: '/media/p5.jpeg',
      name: 'Angular 17 crash cource',
      description: 'Full stack cource with firebase',
      price: '120',
    },
    {
      id: '2',
      image: 'media/p1.jpeg',
      name: 'ReactJs crash cource',
      description: 'Get started with is crash cource',
      price: '199',
    },
    {
      id: '3',
      image: 'media/p3.jpeg',
      name: 'Scss styling master class',
      description:
        'New styling using grid and flex box this is new gen Z way and doing thinks, Get started with is crash cource, Get started with is crash cource.',
      price: '199',
    },
  ]);
}
