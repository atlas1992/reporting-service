import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

export { Report } from '../report/class/report';
import { ReportEditorComponent } from '../report-editor/report-editor.component';

@NgModule(
    {
        imports: [
            CommonModule,
            HttpModule,
            FormsModule
        ],
        declarations: [
            ReportEditorComponent
        ],
        exports: [
            ReportEditorComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
 export class ReportModule { }