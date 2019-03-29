import { CelebrityDetails } from './../_models/celebrityDetails';
import { Response } from './../_models/response';
import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-face-match',
  templateUrl: './face-match.component.html',
  styleUrls: ['./face-match.component.css'],
  animations: [
    trigger('openClose', [
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('2.5s')
      ]),
    ]),
  ]
})
export class FaceMatchComponent implements OnInit {
  awsResponse: Response;
  celebritydetails: CelebrityDetails[];
  isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
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
