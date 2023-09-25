import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title = 'Contacts';

  addContact: FormGroup;

  constructor(private contactService: ContactService, public fb: FormBuilder) {
    this.addContact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onAddContact() {
    this.contactService.addContact(this.addContact.value).subscribe((res) => {
      console.log(res);
    });
  }
}
