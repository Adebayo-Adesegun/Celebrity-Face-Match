import { CelebrityDetails } from './../_models/celebrityDetails';
import { Response } from './../_models/response';
import { Component, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-face-match',
  templateUrl: './face-match.component.html',
  styleUrls: ['./face-match.component.css']
})
export class FaceMatchComponent implements OnInit {
  awsResponse: Response;
  celebritydetails: CelebrityDetails[];
  constructor() { }

  ngOnInit() {
  }

  celebrityCheck(response: any) {
    this.awsResponse = JSON.parse(response);
    this.celebritydetails = this.awsResponse.celebrityDetails;
    console.log(this.celebritydetails);
  }

  celebrityProfile(link: string) {
    link = 'https://' + link;
    window.open(link, '_blank');
  }

}
