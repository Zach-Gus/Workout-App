export class ToDo {
    title: string;
    details: string;
    priority: boolean;
    completed: boolean;
    numCompleted: number = 0;
    votes: number;

    // ? makes parameter optional
    constructor(title: string, details: string, priority: boolean, votes?: number) {
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.completed = false;
        this.votes = votes || 0;
    }
    voteUp():void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

  }