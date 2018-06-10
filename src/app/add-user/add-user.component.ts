import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.class';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    @Input() private users: Array<User>;
    private newUserForm: FormGroup;

    constructor(private fb: FormBuilder) { 
        this.newUserForm = fb.group({
            login: ['', Validators.required],
            site_admin: false
        })
    }

    ngOnInit() {}

    // Handles form submissions
    private submitForm(formObj: any): void {
        console.log("Form : " + JSON.stringify(formObj));
        let newUser = new User();
        newUser.login = formObj.login;
        newUser.site_admin = formObj.site_admin;
        this.users.push(newUser);

        this.newUserForm.reset();
        this.newUserForm.controls['site_admin'].setValue(false);
    }
}
