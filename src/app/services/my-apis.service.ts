import { Icountrys } from './../ViewModel/icountrys';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPadresss } from '../ViewModel/ipadresss';

/* use those apis to get user geolocations and nationality all apis accept get request
https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en
returns all countries with country codes
*********
https://api.ipify.org/?format=json
returns users ip adress
*********
use ip adress to get user geo location and country
https://ipapi.co/s/json/
*/

@Injectable({
  providedIn: 'root'
})
export class MyApisService {

  constructor(private httpClient:HttpClient) { }
  //Fetch all countries Data
  getAllCountries(): Observable<Icountrys[]>
  {
   return this.httpClient.get<Icountrys[]>('https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en');
  }
//Fetch IP Adress Data
  getUserIp():Observable<IPadresss>{
    return this.httpClient.get<IPadresss>('https://api.ipify.org/?format=json');
  }
//Fetch Nationality BY Ip Adress
  getUserNationality(ip:string):Observable<string>{
   return this.httpClient.get<string>(`https://ipapi.co/${ip}/json/`)
  }
}
