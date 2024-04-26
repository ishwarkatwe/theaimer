import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CardsComponent } from './cards/cards.component';
import { CategoriesComponent } from './categories/categories.component';
import { CourceService } from './cource.service';
import { DocumentData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cources',
  standalone: true,
  templateUrl: './cources.component.html',
  styleUrl: './cources.component.scss',
  imports: [SharedModule, CardsComponent, CategoriesComponent],
})
export class CourcesComponent implements OnInit {
  searchtxt = '';
  $items!: Observable<(DocumentData | (DocumentData & {}))[]>;
  constructor(private courceService: CourceService) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.$items = this.courceService.fetch(this.searchtxt);
  }

  // add() {
  //   addDoc(collection(this.firestore, 'cources'), {
  //     name: 'Javascript Fundamentals',
  //     image: './media/p4.jpeg',
  //     description:
  //       'This is lot to learn in js, Js is also known as hackers languages',
  //     categories: 'IT',
  //     price: 499,
  //     duration: '6 hrs',
  //   });
  // }
}
