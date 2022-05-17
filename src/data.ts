export interface IPerson{
    id: number;
    name:string;
    count:number;
    twoPersons:number; 
    perHolidays:number; 
    holidays:number; 
    offCount:number; 
    flag48:boolean; 
    dayOFFlag48:number; 
    countinues:number; 
    lastDayOfWork:number;
    notWorkingDays:number[];
};

export interface IResult{
    [key:string]:IPerson[]
}

const person:IPerson[] = [
    {id: 1, name:'طغرلی', count:0, twoPersons:13, perHolidays:10, holidays:13, offCount:0, flag48:true, dayOFFlag48:0, countinues:4, lastDayOfWork:0, notWorkingDays:[14,15] },
    {id: 2, name:'بهرام', count:0, twoPersons:15, perHolidays:13, holidays:9, offCount:0, flag48:false, dayOFFlag48:-3, countinues:1, lastDayOfWork:-1, notWorkingDays:[4,5,6] },
    {id: 3, name:'شبان', count:0, twoPersons:14, perHolidays:11, holidays:12, offCount:0, flag48:false, dayOFFlag48:-3, countinues:1, lastDayOfWork:-1, notWorkingDays:[25,26,27] },
    {id: 4, name:'ایزدی', count:0, twoPersons:11, perHolidays:9, holidays:15, offCount:0, flag48:false, dayOFFlag48:-3, countinues:0, lastDayOfWork:-1, notWorkingDays:[13,14] },
    {id: 5, name:'نادری', count:0, twoPersons:13, perHolidays:11, holidays:12, offCount:0, flag48:true, dayOFFlag48:0, countinues:2, lastDayOfWork:0, notWorkingDays:[] },
    {id: 6, name:'یزدان', count:0, twoPersons:11, perHolidays:14, holidays:11, offCount:0, flag48:false, dayOFFlag48:-3, countinues:4, lastDayOfWork:-1, notWorkingDays:[18,19,20] },
    {id: 7, name:'جلال', count:0, twoPersons:17, perHolidays:14, holidays:10, offCount:0, flag48:true, dayOFFlag48:0, countinues:2, lastDayOfWork:0, notWorkingDays:[11,12,13] },
];




const month = {name:"خرداد", length: 31};
const daysOfTwoPersons =[2,3,8,11,16,21,25,29,31];
const holidays=[6,13,14,15,20,27];
const perHolidays =[5,12,19,26];
const maxCount =12;
const maxContinues = 4;
const DaysOfNotJalalAndYazdan:number[] = [];

const MinHoliday= false;
const MinTwoPerson=false;
const MinPerHoliday=true;
const JalalYazdanFilter = true;

const times= 1000

export {
    person,
    month,
    daysOfTwoPersons,
    holidays,
    perHolidays,
    maxCount,
    maxContinues,
    DaysOfNotJalalAndYazdan,
    MinHoliday,
    MinTwoPerson,
    MinPerHoliday,
    JalalYazdanFilter,
    times
}