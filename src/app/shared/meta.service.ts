import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor() {}

  getNavItems() {
    return of([
      {
        nameKey: 'home',
        name: 'Home',
        link: '/c/landing',
      },
      {
        nameKey: 'cources',
        name: 'Cources',
        link: '/c/cources',
      },
      {
        nameKey: 'about',
        name: 'About',
        link: '/c/about',
      },
      {
        nameKey: 'contact',
        name: 'Contact us',
        link: '/c/contact',
      },
    ]);
  }

  getNavSocial() {
    return of([
      {
        nameKey: 'facebook',
        name: 'Facebook',
        link: '#',
      },
      {
        nameKey: 'instagram',
        name: 'InstaGram',
        link: '#',
      },
      {
        nameKey: 'youtube',
        name: 'Youtube',
        link: '#',
      },
    ]);
  }

  getTestimonial() {
    return of([
      {
        nameKey: 'facebook',
        name: 'Facebook',
        image: './media/p1.jpeg',
        company: 'OneDev, SSE',
        description:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      },
      {
        nameKey: 'instagram',
        name: 'InstaGram',
        company: 'Mahindra Ltd, Manager',
        image: './media/p2.jpeg',
        description: 'This is awsome to have a great start',
      },
      {
        nameKey: 'youtube',
        name: 'Youtube',
        image: './media/p3.jpeg',
        description: 'Best services ever',
        company: 'PWC, Manager',
      },
      {
        nameKey: 'Anil Deol',
        name: 'Anil Deol',
        image: './media/p4.jpeg',
        description: 'Best services ever, Must try...',
        company: 'IBM, Manager',
      },
      {
        nameKey: 'Rock Neil',
        name: 'Rock Neil',
        image: './media/p5.jpeg',
        description: 'this is one to be tested one and all',
        company: 'One, Manager',
      },
    ]);
  }
}
