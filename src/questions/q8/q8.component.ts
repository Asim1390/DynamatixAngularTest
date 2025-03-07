import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q8',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q8.component.html',
  styleUrl: './q8.component.css',
  standalone: true,
})
export class Q8Component {
  formData = {
    dressingDifficulties: '',
    dressingCondition: '',
  }
  setDressingCondition(value: string) {
    this.formData.dressingCondition = value;
  }
}
