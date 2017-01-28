import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogAppComponent }  from './blogapp.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ BlogAppComponent ],
    bootstrap:    [ BlogAppComponent ]
})

export class BlogAppModule { }