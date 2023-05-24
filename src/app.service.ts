import { Injectable } from '@nestjs/common';
import axios from "axios";
import { json } from 'node:stream/consumers';

@Injectable()
export class AppService {
  async getCountries():Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      headers: {
        'X-RapidAPI-Key': 'd615c8c53bmsh25e4fbabe9f64cap106080jsn46885549e670',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    try {
      const nba :any= await axios.request(options)
      console.log(nba.data)
     
      const onlyNames = nba.data
      return onlyNames
    } catch (error) {
      console.error(error);
    }
    
  }
 async getCountriesName(name:any){
    const options = {
      method: 'GET',
      url: `https://free-nba.p.rapidapi.com/players/3`,
      headers: {
        'X-RapidAPI-Key': 'd615c8c53bmsh25e4fbabe9f64cap106080jsn46885549e670',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    } 
  }
  getCountriesId(){
  }
  
}
