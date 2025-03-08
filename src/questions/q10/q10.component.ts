import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q10',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q10.component.html',
  styleUrl: './q10.component.css',
  standalone: true,
})
export class Q10Component {
  formData = {
    readingDifficulties: '',
    readingCondition: '',
  }
  setReadingDifficulties(value: string) {
    this.formData.readingCondition = value;
    if (value === 'No') {
      setTimeout(() => {
          const question10 = document.getElementById('question11');
          if (question10) {
              question10.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
    }
  }
  setReadingCondition(value: string) {
    this.formData.readingCondition = value;
  }
}
