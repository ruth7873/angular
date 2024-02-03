import { count } from "rxjs";

export class AbsenceDays {
    startDate!: Date;
    countDays!: number;
    constructor(startDate:Date,countDays:number) {
        this.countDays=countDays;
        this.startDate=startDate;
    }
}
