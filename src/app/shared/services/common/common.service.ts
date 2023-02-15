import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public indexMenu:number = 0;
  
  constructor() {}

  public setIndexMenu(index:number):void {
    this.indexMenu = index;
  }

  public getIndexMenu():number {
    return this.indexMenu;
  }
}
