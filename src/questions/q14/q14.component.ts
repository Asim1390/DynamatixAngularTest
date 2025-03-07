import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q14',
  standalone: true,
  imports: [FormsModule, CommonModule,VoiceRecorderComponent],
  templateUrl: './q14.component.html',
  styleUrl: './q14.component.css',
})
export class Q14Component {
  formData = {
    movingDifficulties: '',
    walkingDistance: '',
    movingAround: '',
  };

  setMovingAround(value: string) {
    this.formData.movingAround = value;
  }
}
