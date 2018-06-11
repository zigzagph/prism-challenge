import { Component, OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import { User } from './user.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    public userData: Array<User> = [];
    public selectedUser: User;
    
    constructor(private appService: AppService) {}

    ngOnInit(){ 
        this.appService.getData().subscribe(
            data => this.userData = data, 
            error => console.log(error)
        )

        /* setTimeout(() => {
            let nUser = new User();
            nUser.login = "Poo";
            nUser.site_admin = true;
            this.userData.push(nUser);
        }, 5000); */
    }

    ngOnDestroy(){
        console.log("Killing");
    }

    // fired when a user is selected from the user list
    private changeUserEvent(event: any): void {
        window.scrollTo(0, 0);
        this.selectedUser = event.value;
    }
}
