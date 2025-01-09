import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { StoreComponent } from './components/store/store.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,
            MenuComponent,
            StoreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
