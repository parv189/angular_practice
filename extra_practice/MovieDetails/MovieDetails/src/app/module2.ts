export interface filter{
  Directors:Array<string>;
  Movies:Array<movie>;
  Actors:Array<string>
}
export interface movie{
  MovieID:number;
  MovieName:string
}
