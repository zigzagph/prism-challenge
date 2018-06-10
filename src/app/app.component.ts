import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { User } from './user.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public userData: Array<User> = [];
    public selectedUser: User;
    
    constructor(private appService: AppService) {}

    ngOnInit(){ 
        this.appService.getData().subscribe(
            data => this.userData = data, 
            error => console.log(error)
        )
    }

    // fired when a user is selected from the user list
    private changeUserEvent(event: any): void {
        window.scrollTo(0, 0);
        this.selectedUser = event.value;
    }
}
