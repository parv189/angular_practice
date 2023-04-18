export interface address{
    flat:number|null,
    building:string|null,
    city:string|null
}

export interface user{
    name:string|null,
    email:string|null,
    address:address|null,
    gender:string|null
}