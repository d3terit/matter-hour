import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private client = new PocketBase('http://localhost:8090');
  constructor() { }

  async getFullMatters(page:number, perPage: number, userId : string){
    return await this.client.Records.getList("matters",page, perPage, {filter:`creator = "${userId}"` })
  }

  async createMatter(name:string,intensity:JSON,hidden:boolean,creator:string){
    return await this.client.Records.create("matters",{name,intensity,hidden,creator})
  }
}
