import { Component, OnInit, DoCheck, IterableDiffers } from '@angular/core';
import { AppService } from './services/app.service';
import { User } from './user.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
    public userData: Array<User> = [];
    public selectedUser: User;
    private differ: any;

    constructor(private appService: AppService, differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    // Initializes the users. Either pulls them from the service
    // or gets them from the session storage.
    ngOnInit() {
        if (sessionStorage.length > 0) {
            // console.log("Getting users from session storage...");
            this.userData = JSON.parse(sessionStorage.getItem('Users'));
        } else {
            // console.log("Getting users using service...");
            this.appService.getData().subscribe(
                data => this.userData = data,
                error => console.log(error)
            );
        }
    }

    // Used to track changes to the user array. When a change is
    // made to the users array it is saved to session storage.
    ngDoCheck() {
        const change = this.differ.diff(this.userData);
        if (change != null) {
            sessionStorage.setItem( 'Users', JSON.stringify(this.userData));
        }
    }

    // Event fired when a user is selected from the user list
    private changeUserEvent(event: any): void {
        window.scrollTo(0, 0);
        this.selectedUser = event.value;
    }
}
