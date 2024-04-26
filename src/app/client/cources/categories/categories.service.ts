import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  limit,
  orderBy,
  query,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private fb: Firestore) {}

  fetch() {
    const itemCollection = collection(this.fb, 'categories');
    const q = query(itemCollection, orderBy('name'), limit(50));
    return collectionData(q);
  }
}
