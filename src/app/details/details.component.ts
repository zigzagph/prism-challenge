import { Component, Input } from '@angular/core';
import { User } from '../user.class';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    @Input() private user: User; // input user data
    constructor() {}
}
