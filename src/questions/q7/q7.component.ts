import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q7',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q7.component.html',
  styleUrl: './q7.component.css',
  standalone: true,
})
export class Q7Component {
  formData = {
    toiletDifficulties: '',
    toiletCondition: '',
  }
  
  setToiletCondition(value: string) {
    this.formData.toiletCondition = value;
    if (value === 'No') {
      setTimeout(() => {
          const question8 = document.getElementById('question8');
          if (question8) {
              question8.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
  }
  }
settoiletDifficulties(value: string) {
  this.formData.toiletDifficulties = value;
}
}
