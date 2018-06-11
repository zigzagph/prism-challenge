import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.class';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    @Input() private users: Array<User>;    // input users array
    private newUserForm: FormGroup;     // new user entry form

    constructor(private fb: FormBuilder) { 
        // new user form
        this.newUserForm = fb.group({
            login: ['', Validators.required],
            site_admin: false
        })
    }

    // Handles form submissions
    private submitForm(formObj: any): void {
        // new user object
        let newUser = new User();
        newUser.login = formObj.login;
        newUser.site_admin = formObj.site_admin;
        this.users.push(newUser);

        // used to reset the default user values
        this.newUserForm.reset();
        this.newUserForm.controls['site_admin'].setValue(false);
    }
}
