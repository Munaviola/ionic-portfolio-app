import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
// import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    // IonicModule,
    FormsModule,
  ],
})
export class HomePage {
  userData = {
    user: '',
  };

  constructor() {}

  submit() {
    const formData = this.userData;
    const message = `Name: ${formData.user}`;
    alert(message);
  }
}
