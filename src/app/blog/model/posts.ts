export class Posts {
  constructor(
    public _id: Date,
    public date: Date,
    public author: string,
    public title:string,
    public subtitle:string,
    public text:string,
  ){}
}
