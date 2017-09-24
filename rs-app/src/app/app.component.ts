import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  home: boolean;
  editor: boolean;

  ngOnInit() {
    this.home = true;
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
}
