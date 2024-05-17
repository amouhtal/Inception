import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'portfolio-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  form: FormGroup = this.fb.group({
    from_name: [''],
    from_lastname: [''],
    to_name: ['amouhtal'],
    from_email: [''],
    subject: ['Portfolio Contact Form'],
    message: [''],
  });

  constructor(private fb: FormBuilder) {}
  async send() {
    emailjs.init('I8WI59GkhqhQ0qXLR')
    let response = await emailjs.send('service_2qqyqdv', 'template_271tzlf', {
      from_name: this.form.value.from_name + ' ' + this.form.value.from_lastname,
      to_name: 'Admin',
      form_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    alert('Email sent successfully');
  }
}
