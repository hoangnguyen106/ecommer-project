import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title = 'Contacts';

  addContact: FormGroup;

  constructor(
    private contactService: ContactService,
    public fb: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.addContact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onAddContact() {
    this.contactService.addContact(this.addContact.value).subscribe((res) => {
      this.addContact.reset();
      this.toastrService.success(
        'We will contact you as soon as.',
        'Send contact successfully !!!'
      );
      console.log(res);
    });
  }
}
