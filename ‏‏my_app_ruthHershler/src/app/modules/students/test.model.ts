export class Test {
    id: number = 0;
    date: Date = new Date();
    description: string = "";
    mark: number = 0;
    constructor(id: number, date: Date, description: string, mark: number) {
        this.date = date;
        this.description = description;
        this.id = id;
        this.mark = mark;
    }
}
