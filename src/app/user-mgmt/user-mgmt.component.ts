import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { User } from '../user.class';

@Component({
    selector: 'app-user-mgmt',
    templateUrl: './user-mgmt.component.html',
    styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnChanges {
  @Input() private users: Array<User>;

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        //console.log("!!User Data Change!! : " + JSON.stringify(changes));

        console.log("!!User Data Change!!");
    }
}
