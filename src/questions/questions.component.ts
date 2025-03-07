import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FillingFormComponent } from './filling-form/filling-form.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from "./q3/q3.component";
import { Q4Component } from "./q4/q4.component";
import { Q5Component } from "./q5/q5.component";
import { Q6Component } from "./q6/q6.component";
import { Q7Component } from "./q7/q7.component";
import { Q8Component } from "./q8/q8.component";
import { Q9Component } from './q9/q9.component';
import{ Q10Component } from './q10/q10.component';
import { Q11Component } from './q11/q11.component';
import { Q12Component } from './q12/q12.component';
import { Q13Component } from './q13/q13.component';
import { Q14Component } from './q14/q14.component';
import { Q15Component } from './q15/q15.component';
import { WhatHappensNextComponent } from './what-happens-next/what-happens-next.component';
import { FinalChecklistComponent } from './final-checklist/final-checklist.component';

@Component({
  selector: 'app-questions',
  imports: [FormsModule , CommonModule,FillingFormComponent,DeclarationComponent,Q1Component ,Q2Component,Q3Component, Q4Component, Q5Component,Q6Component,Q7Component, Q8Component ,Q9Component , Q10Component ,
    Q11Component,
    Q12Component,
     Q13Component,
    Q14Component,
    Q15Component,
    WhatHappensNextComponent ,  FinalChecklistComponent ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  formData = {
    name:'',
    relationship:'',
    powerOfAttorney: false,
  }
  logData() {


    console.log(this.formData);
  }
}
