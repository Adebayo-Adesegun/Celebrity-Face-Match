import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceMatchComponent } from './face-match/face-match.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

@NgModule({
   declarations: [
      AppComponent,
      FaceMatchComponent,
      PhotoUploadComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
