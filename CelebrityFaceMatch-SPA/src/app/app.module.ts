import { FaceAwsService } from './_services/face-aws.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceMatchComponent } from './face-match/face-match.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
   declarations: [
      AppComponent,
      FaceMatchComponent,
      PhotoUploadComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FileUploadModule
   ],
   providers: [
     FaceAwsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
