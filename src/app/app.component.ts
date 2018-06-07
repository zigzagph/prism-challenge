import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { ListComponent } from './list/list.component';
import { User } from './user.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private data;
    public userData: Array<User>;
    public selectedUser: User;

    constructor(private appService: AppService) {}

    ngOnInit(){ 
        this.appService.getData().subscribe(
            data => this.data = data, 
            error => console.log(error),
            () => this.run()
        )
    }

    // do away with this before completion
    run(): void {
        this.userData = this.data;
    }

    // fired when a user is selected from the user list
    private changeUserEvent(event: any): void {
        //console.log("Changing user : " + JSON.stringify(event.value));
        window.scrollTo(0, 0);
        this.selectedUser = event.value;
    }
}
