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
  }
  setWashingCondition(value: string) {
    this.formData.washingCondition = value;
  }
}
