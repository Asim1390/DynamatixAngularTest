import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-filling-form',
  standalone: true,
  imports: [FormsModule, CommonModule, VoiceRecorderComponent],
  templateUrl: './filling-form.component.html',
  styleUrls: ['./filling-form.component.css']
})
export class FillingFormComponent {
  formData = {
    name: '',
    relationship: '',
    reason: '',
    noneApply: false,
    wantDwpAppointed: false,
    powerOfAttorney: false,
    deputyReceiver: false,
    tutorGuardian: false,
    corporateAppointee: false,
    processOfBecoming: false,
    dwpAppointed: false
  };

  activeField: 'name' | 'relationship' | 'reason' | null = null; 

  logData() {
    console.log(this.formData);
  }

  startRecording(field: 'name' | 'relationship' | 'reason') {
    this.activeField = field;
  }

  updateField(text: string) {
    if (this.activeField) {
      this.formData[this.activeField] = text;
      this.activeField = null;
    }
  }
}
