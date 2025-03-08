import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q6',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q6.component.html',
  styleUrl: './q6.component.css',
  standalone: true,
})
export class Q6Component {
 
  formData = {
    washingCondition: '',
    bathingCondition: '',
  }
  setBathingCondition(value: string) {
    this.formData.bathingCondition = value;

    if (value === 'No') {
        setTimeout(() => {
            const question7 = document.getElementById('question7');
            if (question7) {
                question7.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

  setWashingCondition(value: string) {
    this.formData.washingCondition = value;
    
 
  }
}
