import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q5',
  imports: [FormsModule , CommonModule, VoiceRecorderComponent],
  templateUrl: './q5.component.html',
  styleUrl: './q5.component.css',
  standalone: true,
})
export class Q5Component {
  formData = {
    therapyDetails: '',
    difficultie: '',
    managingCondition: '',
  }
  setManagingCondition(value: string) {
    this.formData.managingCondition = value;
    if (value === 'no') {
     
      const question6 = document.getElementById('question6');
      if (question6) {
          question6.scrollIntoView({ behavior: 'smooth' });
      }
  }
 
  }
}
