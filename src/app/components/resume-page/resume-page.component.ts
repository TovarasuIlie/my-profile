import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

}
