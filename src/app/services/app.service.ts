import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private url:string = 'https://api.github.com/users';

    constructor(private http: HttpClient) {}

    public getData(): Observable<any> {
        return this.http.get(this.url).pipe(map((res:Response) => res));
  } 
}
