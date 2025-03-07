import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q1',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent ],
  standalone: true,
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.css'
})
export class Q1Component {
  formData = {
    conditions: [{ condition: '', startDate: '' }],
    medications: [{ medicine: '', dose: '', frequency: '', sideEffects: '' }],
    treatments: [{ therapy: '', startDate: '', frequency: '' }],
  }
  addTreatment() {
    this.formData.treatments.push({ therapy: '', startDate: '', frequency: '' });
  }
  addMedication() {
    this.formData.medications.push({ medicine: '', dose: '', frequency: '', sideEffects: '' });
  }
  addCondition() {
    this.formData.conditions.push({ condition: '', startDate: '' });
  }
  updateField(text: string, type: 'conditions' | 'medications' | 'treatments', index: number, key: string) {
    if (this.formData[type] && this.formData[type][index]) {
      (this.formData[type][index] as any)[key] = text;
    }
  }
}
