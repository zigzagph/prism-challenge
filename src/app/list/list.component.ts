import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.class';
import { Pipe, PipeTransform } from "@angular/core";
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() private users: Array<User>; // input array of user data
    @Input() private currentUser: User; // input current selected user
    @Output() private userSelectionEvent = new EventEmitter(); // click event for user change
    private filterValue: string = 'showAll';

    constructor() {}
    ngOnInit() {}

    // emits an event on user change or click event
    private userClick(selectedUser: User): void {
        /* this.userSelectionEvent.emit({
            value: selectedUser
        }); */
        this.emitEvent(selectedUser);
    }

    private emitEvent(val: any): void {
        this.userSelectionEvent.emit({
            value: val
        });
    }

    private showAll(): void {
        this.filterValue = "showAll";
    }

    private admins(): void {
        this.filterValue = "admins";
        
        // keeps the user data displayed if the current user
        // belongs to that filter category
        if( this.currentUser ){
            if( !this.currentUser.site_admin ){
                this.emitEvent(undefined);
            }
        }
    }

    private non(): void {
        this.filterValue = "nons";
        
        // keeps the user data displayed if the current user
        // belongs to that filter category
        if( this.currentUser ){
            if( this.currentUser.site_admin ){
                this.emitEvent(undefined);
            }
        }
    }

    private onEnter(value: any): void {
        
        // edge cases : 
        // - if user enters nothing, 
        // - if user enters a name not in the list
        let arr = this.users.filter( user => user.login === value);
        if( value === '' || arr.length == 0) {
            return;
        }
        
        this.filterValue = value;

        // keeps the user data displayed if the current user
        // belongs to that filter category
        if( this.currentUser ){
            if( this.currentUser.login != value ){
                this.emitEvent(undefined);
            }
        }
    }
}


// Using a pipe filters instead of filter functions in order to 
// not destroy the integrity of the data
@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
    transform(user: User, filterVal: string): boolean {
        
        // show only admins
        if( filterVal == "admins" ){
            if ( user.site_admin === true ){
                return true;
            }
        }

        // show only non admins
        if( filterVal == "nons" ){
            if ( user.site_admin === false ){
                return true;
            }
        }

        // show all users
        if( filterVal == "showAll" ){
            return true;
        }
        
        // show only string match
        if( filterVal === user.login ){
            return true;
        }

        return false;
    }
}
