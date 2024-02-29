import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showForm = false;

  constructor(private fb: FormBuilder){} // Creamos un constructor para inyectar un servicio que nos ayudará a crear los FormGroup más fácilmente

  form:FormGroup = this.fb.group({
    name: [''],
    email: [''],
    city: [''],
    contacts: this.fb.array([
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      }),
    ]),
  }); // Creamos la variable form de tipo FormGroup
  // Ahora cada propiedad reflejará el campo del form

  showFormMethod() { // Método para mostrar el form
    this.showForm = !this.showForm;
    console.log('showFormMethod called, showForm is now', this.showForm);
  }
  
  get contacts() {
    return this.form.get('contacts') as FormArray;
  }

  addContact(){
    this.contacts.push(
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      }),
    )
  }

  deleteContact(i: number) {
    this.contacts.removeAt(i);
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value, null, 2));
    this.form.reset();
  }
}
