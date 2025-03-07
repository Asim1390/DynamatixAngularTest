import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-declaration',
  standalone: true,
  imports: [FormsModule, CommonModule , VoiceRecorderComponent],
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css'] // ✅ Fixed styleUrls syntax
})
export class DeclarationComponent {
  formData = {
    signature: '',
    yourName: '',
    date: ''
  };

  signatureUrl: string | ArrayBuffer | null = null; // ✅ Moved outside formData

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.signatureUrl = reader.result; // ✅ Convert file to base64 for preview
        this.formData.signature = file; // ✅ Store file in formData
      };
      reader.readAsDataURL(file);
    }
  }
}
