import {
  mergeApplicationConfig,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // importProvidersFrom(provideAuth(() => getAuth())),
    // importProvidersFrom(
    //   provideFirebaseApp(() =>
    //     initializeApp({
    //       apiKey: 'AIzaSyBgrsdVNn82xT9EquU1l0oegB5iGHnBvuk',
    //       authDomain: 'theaimer-web.firebaseapp.com',
    //       databaseURL: 'https://theaimer-web-default-rtdb.firebaseio.com',
    //       projectId: 'theaimer-web',
    //       storageBucket: 'theaimer-web.appspot.com',
    //       messagingSenderId: '1098140318302',
    //       appId: '1:1098140318302:web:2a3456c64f62abe25c92cf',
    //     })
    //   )
    // ),
    // importProvidersFrom(provideFirestore(() => getFirestore())),
    // importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
