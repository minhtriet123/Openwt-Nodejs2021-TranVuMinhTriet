
export class MyTime {
    private _hour: number;
    private _minute: number;
    private _second: number;

    constructor(h: number = 0, m: number = 0, s: number = 0) {
        (0 <= h && h <= 23) ? this._hour = h : this._hour = 0;
        (0 <= m && m <= 59) ? this._minute = m : this._minute = 0;
        (0 <= s && s <= 59) ? this._second = s : this._second = 0;
    }
    public get hour(): number {
        return this._hour;
    }

    public set hour(hour: number
    ) {
        this._hour = hour;
    }

    public get minute(): number {
        return this._minute;
    }

    public set minute(minute: number) {

        this._minute = minute;
    }

    public get second(): number {
        return this._second;
    }

    public set second(second: number) {
        this._second = second;
    }
    toString(): string {
        let hh = (this._hour<10) ? `0${this._hour}` : this._hour,
            mm = (this._minute<10) ? `0${this._minute}` : this._minute,
            ss = (this._second<10) ? `0${this._second}` : this._second;
        return `${hh} : ${mm} : ${ss}`
    }
}

let t1 = new MyTime(13,16,3);
console.log(t1.toString())