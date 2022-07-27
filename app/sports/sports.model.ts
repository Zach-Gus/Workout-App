export class Sports {
    title: string;
    Description: string;
    DueDate:String;
    votes: number;

    constructor(title: string, Description:string, votes: number, DueDate:string) {
        this.title = title;
        this.Description = Description;
        this.DueDate = DueDate;
        this.votes = votes;
    }


}

