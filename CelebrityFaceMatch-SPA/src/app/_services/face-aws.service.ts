import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceAwsService {
// Get the production environment url
baseUrl = environment.apiUrl;

// Inject HttpClient to constructor
constructor(private http: HttpClient) { }

}