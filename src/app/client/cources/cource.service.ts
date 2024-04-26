import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CourceService {
  constructor(private fb: Firestore) {}

  fetch(search: string) {
    const itemCollection = collection(this.fb, 'cources');
    const q = query(
      itemCollection,
      where('name', '>=', search.toUpperCase()),
      orderBy('name'),
      limit(10)
    );
    return collectionData(q);
  }
}
