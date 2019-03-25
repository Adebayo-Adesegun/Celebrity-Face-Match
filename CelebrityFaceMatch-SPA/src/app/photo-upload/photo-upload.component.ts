import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
 @Output() responseEmit: EventEmitter<any> = new EventEmitter();
 uploader: FileUploader;
 hasBaseDropZoneOver = false;
 baseUrl = environment.apiUrl;

 constructor() { }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'FaceMatch',
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024 // 10mb
    });
    this.uploader.onAfterAddingFile = (file) => (file.withCredentials = false);
     this.uploader.onSuccessItem = (item, response, status, headers) => {
        if (response) {
          const res: Response = JSON.parse(response);
          this.responseEmit.emit(JSON.stringify(res));
        }
     };
     this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log('An error occured');
     }
  }

}
