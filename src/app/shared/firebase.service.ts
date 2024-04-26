import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { OrderByDirection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService<T> {
  private collectionName!: string;
  private collection!: AngularFirestoreCollection<T>;

  constructor(private firestore: AngularFirestore) {}

  setCollection(collectionName: string): void {
    this.collectionName = collectionName;
    this.collection = this.firestore.collection<T>(this.collectionName);
  }

  create(data: T): Observable<DocumentReference<T>> {
    return new Observable<DocumentReference<T>>((observer) => {
      this.collection
        .add(data)
        .then((docRef) => {
          observer.next(docRef);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getById(id: string): Observable<T | undefined> {
    return this.collection.doc<T>(id).valueChanges();
  }

  getAll(): Observable<T[]> {
    return this.collection.valueChanges();
  }

  update(id: string, data: Partial<T>): Observable<void> {
    return new Observable<void>((observer) => {
      this.collection
        .doc<T>(id)
        .update(data)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  delete(id: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.collection
        .doc<T>(id)
        .delete()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getSortedAndPaginatedData(
    fieldName = 'fieldName',
    sortBy: OrderByDirection = 'asc',
    pageSize: number = 10,
    lastVisible?: any
  ): Observable<any[]> {
    return this.firestore
      .collection<T>(this.collectionName, (ref) => {
        if (lastVisible) {
          ref.startAfter(lastVisible);
        }
        return ref && ref.limit(pageSize).orderBy(fieldName, sortBy);
      })
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
