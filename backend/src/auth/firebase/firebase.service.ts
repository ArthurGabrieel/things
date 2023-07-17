import { Injectable } from '@nestjs/common';
import * as firebaseAccount from '../firebaseAccount.json';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  firebaseApp: admin.app.App;

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(
        firebaseAccount as admin.ServiceAccount,
      ),
    });
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.firebaseApp.auth().verifyIdToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}
