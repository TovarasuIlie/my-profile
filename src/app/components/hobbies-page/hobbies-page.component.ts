import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-hobbies-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './hobbies-page.component.html',
  styleUrl: './hobbies-page.component.css'
})
export class HobbiesPageComponent {

}
