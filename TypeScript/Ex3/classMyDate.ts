
export class MyDate {
    private _year: number
    private _month: number
    private _day: number
    public _MONTHS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    public _DAYS: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    public _DAYS_IN_MONTHS: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    constructor(y: number, m: number, d: number) {
        (1 <= y && y <= 9999) ? this._year = y : this._year = -1;
        (1 <= m && m <= 12) ? this._month = m : this._month = -1;
        if (this.isLeapYear() && this._month === 2) {
            (1 <= m && m <= 28) ? this._day = d : this._day = -1
        }
        else {
            if (this._month == 2) (1 <= m && m <= 29) ? this._day = d : this._day = -1
            else if (this._month === 1 || 3 || 5 || 7 || 8 || 10 || 12) (1 <= m && m <= 31) ? this._day = d : this._day = -1;
            else (1 <= m && m <= 30) ? this._day = d : this._day = -1;
        }

    }
    public get year(): number {
        return this._year;
    }

    public set year(year: number
    ) {
        this._year = year;
    }

    public get month(): number {
        return this._month;
    }

    public set month(month: number
    ) {
        this._month = month;
    }

    public get day(): number {
        return this._day;
    }

    public set day(day: number
    ) {
        this._day = day;
    }
    getDayofWeek():string {
        let JMD = (this._day + ((153 * (this._month + 12 * ((14 - this._month) / 12) - 3) + 2) / 5) +
            (365 * (this._year + 4800 - ((14 - this._month) / 12))) +
            ((this._year + 4800 - ((14 - this._month) / 12)) / 4) -
            ((this._year + 4800 - ((14 - this._month) / 12)) / 100) +
            ((this._year + 4800 - ((14 - this._month) / 12)) / 400) - 32045) % 7;
            return this._DAYS[Math.floor(JMD)]
    }
    isLeapYear(): boolean {
        return (this._year % 4 === 0 && this._year % 100 !== 0) || (this._year % 400 === 0)
    }
    isValidDate(): boolean {
        return !(this._year === -1 || this._month === -1 || this._day === -1)
    }
    nextDay(): number {
        return (this.isValidDate()) ? this._day + 1 : -1
    }
    nextMonth(): number {
        return (this.isValidDate()) ? ((this._month + 1) > 12 ? 1 : 12) : -1
    }
    nextYear(): number {
        return (this.isValidDate()) ? this._year + 1 : -1
    }
    toString(): string {
        return `${this.getDayofWeek()} ${this._day}  ${this._MONTHS[this._month]} ${this._year}`
    }
}

let d1 = new MyDate(2012, 2, 28);
console.log(d1.toString());  // Tuesday 28 Feb 2012
console.log(d1.nextDay());   // Wednesday 29 Feb 2012
console.log(d1.nextDay());   // Thursday 1 Mar 2012
console.log(d1.nextMonth()); // Sunday 1 Apr 2012
console.log(d1.nextYear());  // Monday 1 Apr 2013
console.log(d1.getDayofWeek());  // Monday 1 Apr 2013
// let d2 = new MyDate(2012, 1, 2);
// console.log(d2);                 // Monday 2 Jan 2012
// console.log(d2.previousDay());   // Sunday 1 Jan 2012
// console.log(d2.previousDay());   // Saturday 31 Dec 2011
// console.log(d2.previousMonth()); // Wednesday 30 Nov 2011
// console.log(d2.previousYear());  // Tuesday 30 Nov 2010

// let d3 = new MyDate(2012, 2, 29);
// console.log(d3.previousYear());  // Monday 28 Feb 2011

// // MyDate d4 = new MyDate(2099, 11, 31); // Invalid year, month, or day!
// // MyDate d5 = new MyDate(2011, 2, 29);  // Invalid year, month, or day!