import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {

}
