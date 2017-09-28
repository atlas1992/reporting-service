import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Report } from '../report-editor.module';
import 'rxjs/Rx';

@Injectable() 
export class CommitService {
    constructor(private http: Http) {
    }

    public updateReports(r: Report): Promise<object> {
        const url = 'http://localhost:3000/Reports/';
        const reportId = r.ReportId;
        const fullUrl = url + reportId;
        return this.http.put(fullUrl, r)
            .map((response: Response) => response.json())
            .catch(this.handleError).toPromise();
    }

    public addReports(r: Report): Promise<object> {
        const url = 'http://localhost:3000/Reports/';
        const reportId = r.ReportId;
        return this.http.post(url, r)
            .map((response: Response) => response.json())
            .catch(this.handleError).toPromise();
    }

    public deleteReports(r: Report): Promise<object> {
        const url = 'http://localhost:3000/Reports/';
        const reportId = r.ReportId;
        const fullUrl = url + reportId;
        return this.http.delete(fullUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError).toPromise();
    }

    private handleError(): Observable<Report[]> {
        console.log('Error fetching reports from WebAPI.')
        const empty: Report[] = [];
        return Observable.of(empty);
    }
}