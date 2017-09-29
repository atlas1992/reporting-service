import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ReportComponent } from './report/report.component'
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  home: boolean;
  editor: boolean;
  loggedin: boolean;
  username: string;

  @ViewChild(ReportComponent) report: ReportComponent;

  @HostListener('window:beforeunload',['$event'])
  public alertLeaving($event): string {
    return $event.returnValue = '';
  }

  ngOnInit() {
    this.home = true;
    this.loggedin = false;
  }

  private changePage(e: any) {
    if (e.target.attributes.id.nodeValue === 'reports') {
      this.editor = true;
      this.home = false;
    } else if (e.target.attributes.id.nodeValue === 'home') {
      this.editor = false;
      this.home = true;
    }
  }

  private add() {
    this.report.add();
  }
}
