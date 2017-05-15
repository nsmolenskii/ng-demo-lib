import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GreeterComponent} from './greeter.component';
import {FormsModule} from '@angular/forms';
import {MdCardModule, MdInputModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [GreeterComponent],
  exports: [GreeterComponent]
})
export class GreeterModule {
}
