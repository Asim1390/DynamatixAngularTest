import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q2',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q2.component.html',
  styleUrl: './q2.component.css',
  standalone: true,
})
export class Q2Component {
  formData = {
    healthProfessionals: [{ name: '', address: '', profession: '', lastSeen: '' }],
  }
  removeHealthProfessional(index: number) {
    this.formData.healthProfessionals.splice(index, 1);
  }
  addHealthProfessional() {
    this.formData.healthProfessionals.push({ name: '', address: '', profession: '', lastSeen: '' });
  }
  updateField(text: string, type: 'healthProfessionals', index: number, key: string) {
    if (this.formData[type] && this.formData[type][index]) {
      (this.formData[type][index] as any)[key] = text;
    }
  }
}
