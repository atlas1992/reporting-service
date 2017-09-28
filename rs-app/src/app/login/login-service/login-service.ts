import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../login.module';
import 'rxjs/Rx';

@Injectable() 
export class LoginService {
    constructor(private http: Http) {

    }

    public getUser(username: string): Promise<User[]> {
        const url = 'http://localhost:3000/Users/';
        const fullUrl = url + username;
        return this.http.get(url)
            .map((response: Response) => <User[]>response.json())
            .catch(this.handleError).toPromise();
    }

    private handleError(): Observable<User[]> {
        console.log('Error fetching users from WebAPI.')
        const empty: User[] = [];
        return Observable.of(empty);
    }
}