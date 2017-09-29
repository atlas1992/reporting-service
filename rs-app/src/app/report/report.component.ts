import { Component, OnInit, Output } from '@angular/core';
import { ReportService } from './report-service/report-service';
import { Report } from './class/report';
import { CommitService } from '../report-editor/commit-service/commit-service'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [ReportService, CommitService]
})
export class ReportComponent implements OnInit {

  reports: Report[];
  reportEditing: Report;
  @Output() editing: boolean;
  @Output() viewing: boolean;

  constructor(private reportService: ReportService, private commitService: CommitService) { }

  ngOnInit() {
    this.reports = [];
    this.reportService.getReports().then(res => {
      this.reports = res;
    });
  }

  private openReportEditor(r: Report): void {
    this.viewing = false;
    this.editing = true;
    this.reportEditing = r;
  }

  private openReportEditorView(r: Report): void {
    this.editing = false;
    this.viewing = true;
    this.reportEditing = r;
  }

  add() {
    const r = new Report();
    let id = 0;
    if (this.reports.length !== 0) {
      id = Math.max.apply(Math, this.reports.map(function (o) { return o.ReportId; })) + 1;
    } else {
      id = 1;
    }
    const d = new Date;
    r.Time = d.toLocaleString();

    r.Content = '';
    r.Title = '';
    r.ReportId = id;
    r.Time = r.Time;

    this.commitService.addReports(r).then(d => {
      if (d['ReportId'] === r.ReportId) {
        this.reports.push(r);
        this.reportEditing = r;
      }
    })
  }

  private delete(r: Report) {
    if (this.viewing || this.editing) {
      if (r === this.reportEditing) {
        this.viewing = false;
        this.editing = false;
      }
    }
    this.commitService.deleteReports(r).then(d => {
      if (d['affectedRows'] === 1) {
        const index = this.reports.indexOf(r);
        if (index > -1) {
          this.reports.splice(index, 1)
        }
      }
    })
  }

  private save(r: Report) {
    const d = new Date;
    r.Time = d.toLocaleString();
    this.commitService.updateReports(r).then(d => {
      if (d['affectedRows'] >= 1) {
      }
    });
  }
}
