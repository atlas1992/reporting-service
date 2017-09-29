import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../report/class/report'
import { CommitService } from './commit-service/commit-service';

@Component({
  selector: 'app-report-editor',
  templateUrl: './report-editor.component.html',
  styleUrls: ['./report-editor.component.css'],
  providers: [CommitService]
})
export class ReportEditorComponent implements OnInit {

  constructor(private commitService: CommitService) { }

  @Input() editing: boolean;
  @Input() report: Report;
  @Input() viewing = false;

  saved: boolean;
  savedTime: string;

  ngOnInit() {
  }

  public options: Object = {
    htmlExecuteScripts: true
  }

  private save(r: Report) {
    const d = new Date;
    r.Time = d.toLocaleString();
    this.commitService.updateReports(r).then(d => {
      if (d['affectedRows'] >= 1) {
        this.saved = true;
        this.savedTime = r.Time;
      }
    });
  }
}
