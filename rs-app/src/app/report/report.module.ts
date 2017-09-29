import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MatSidenavModule, MdIconModule, MatGridListModule,MatTooltipModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReportComponent } from './report.component';
import { ReportEditorComponent } from '../report-editor/report-editor.component';

export { Report } from './class/report';
export { ReportComponent } from './report.component';
export { ReportService } from './report-service/report-service';

@NgModule(
    {
        imports: [
            CommonModule,
            HttpModule,
            FormsModule,
            MdButtonModule, MdCheckboxModule, MdCardModule, MatSidenavModule, MdIconModule, MatGridListModule,MatTooltipModule,
            FroalaEditorModule.forRoot(), 
            FroalaViewModule.forRoot()
        ],
        declarations: [
            ReportComponent,
            ReportEditorComponent
        ],
        exports: [
            ReportComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
 export class ReportModule { }