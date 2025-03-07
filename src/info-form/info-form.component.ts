import { Component } from '@angular/core';
import {QuestionsComponent} from '../questions/questions.component';
import {FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info-form',
  imports: [FormsModule , CommonModule ,QuestionsComponent ],
  templateUrl: './info-form.component.html',
  styleUrl: './info-form.component.css',
  standalone: true,
  
})
export class InfoFormComponent {

}
