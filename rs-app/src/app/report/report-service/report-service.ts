import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Report } from '../report.module';
import 'rxjs/Rx';

@Injectable() 
export class ReportService {
    constructor(private http: Http) {

    }

    public getReports(): Promise<Report[]> {
        const url = 'https://feisty-beacon-180520.appspot.com/Reports';
        return this.http.get(url)
            .map((response: Response) => <Report[]>response.json())
            .catch(this.handleError).toPromise();
    }

    private handleError(): Observable<Report[]> {
        console.log('Error fetching reports from WebAPI.')
        const empty: Report[] = [];
        return Observable.of(empty);
    }
}