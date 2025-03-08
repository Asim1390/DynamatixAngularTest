import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q9',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q9.component.html',
  styleUrl: './q9.component.css',
  standalone: true,
})
export class Q9Component {
 
  formData = {
    talkingDifficulties: '',
    talkingCondition: '',
  }
  setTalkingDifficulties(value: string) {
    this.formData.talkingDifficulties = value;
    if (value === 'No') {
      setTimeout(() => {
          const question10 = document.getElementById('question10');
          if (question10) {
              question10.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
    }
  }
  setTalkingCondition(value: string) {
    this.formData.talkingCondition = value;
  }
}
