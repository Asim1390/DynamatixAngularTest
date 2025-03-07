import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfoBookletComponent} from "../info-booklet/info-booklet.component"
import {InfoFormComponent} from "../info-form/info-form.component"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , InfoBookletComponent, InfoFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
 
})
export class AppComponent {
  title = 'DynamatixAngularTest';
}
