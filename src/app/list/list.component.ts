import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.class';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() private users: Array<User>; // input array of user data
    @Input() private currentUser: User; // input current selected user
    @Output() private userSelectionEvent = new EventEmitter(); // click event for user change

    constructor() {}
    ngOnInit() {}

    // emits an event on user change or click event
    private userClick(selectedUser: User): void {
        this.userSelectionEvent.emit({
            value: selectedUser
        });
    }
}
