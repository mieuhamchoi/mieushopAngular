import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatVndPipe } from './pipes/format-vnd.pipe';
import { MaxTextPipe } from './pipes/max-text.pipe';

@NgModule({
  declarations: [    
    FormatVndPipe,
    MaxTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FormatVndPipe, MaxTextPipe]
})
export class SharedModule { }
