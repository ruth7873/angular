import { AbsenceDays } from "./absence-days.model";
import { Test } from "./test.model";

export class Student {
        [x: string]: any;
        id!: number;
        firstName!: string;
        familyName!: string;
        adress!: string;
        phone!: string;
        active!: boolean;
        marksAvg!: number;
        leaveDate!: Date;
        profession!: number;
        year!: Year;
        tests!: Test[];
        absenceDays!:AbsenceDays[];
        constructor() {
                this.absenceDays=[new AbsenceDays(new Date("10-10-2023"),5)];
                this.id = 9999;
                this.active = true;
                this.marksAvg = 0;
                this.profession = 1;
        }
}
export enum Profession {
        Programing = 1,
        Math = 2,
        Teaching = 3
}
export enum Year {
        'First' = 1,
        'Second' = 2,
        'Third' = 3
}