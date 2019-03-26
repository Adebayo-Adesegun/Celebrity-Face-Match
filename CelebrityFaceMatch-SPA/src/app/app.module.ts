import { routes } from './../routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceMatchComponent } from './face-match/face-match.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
   declarations: [
      AppComponent,
      FaceMatchComponent,
      PhotoUploadComponent,
      NotFoundComponent
   ],
   exports: [RouterModule],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FileUploadModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
