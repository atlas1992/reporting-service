import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

export { User } from './classes/user';
export { LoginComponent } from './login.component';
export { LoginService } from './login-service/login-service';

@NgModule(
    {
        imports: [
            CommonModule,
            HttpModule,
            FormsModule
        ],
        declarations: [
            LoginComponent
        ],
        exports: [
            LoginComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
 export class LoginModule{ }