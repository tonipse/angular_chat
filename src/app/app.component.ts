import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Chat';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    if (this.itemValue !== '') {
      this.db.list('items').push({ content: this.itemValue });
      this.itemValue = '';
    }
  }
}
