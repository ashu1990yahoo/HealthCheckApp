import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class UrlService{

    map: Map<string,string>;

    constructor(){

    }

    public getEnvMap(env:string){
        switch(env){
            case "dev": { 
                return this.getDevUrlMap(env);
                break; 
             } 
             case "prod": { 
                return this.getprodUrlMap(env);
                break; 
             } 
        }
        
    }

    public getDevUrlMap (env:string) {
        this.map = new Map<string,string>();
        this.map.set('https://www.youtube.com','');
        this.map.set('https://any-api.com','');
        this.map.set('https://www.techiediaries.com','');
        this.map.set('https://www.google.co.in','');
        return this.map;
    }


    public getprodUrlMap (env:string) {
        this.map = new Map<string,string>();
        this.map.set('https://www.youtube.com','');
        this.map.set('https://any-api.com','');
        this.map.set('https://www.techiediaries.com','');
        this.map.set('https://www.google.co.in','');
        this.map.set('https://ng2.codecraft.tv','');
        
        return this.map;
    }

    



}