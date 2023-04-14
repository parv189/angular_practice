export interface student {
    name:string;
    id:number;
    standard:string;
    address:string;
    city:string
}

export interface studentarr extends Array<student>{}
