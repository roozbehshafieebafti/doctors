import { IPerson,
    holidays, 
    perHolidays, 
    daysOfTwoPersons,
    MinHoliday,
    MinTwoPerson,
    MinPerHoliday
} from './data';
import { filter } from './filters';

export async function select(
    exeptionsPerson:number[],
    day:number,
    temp:IPerson[],
    isYazdan:boolean,
    isJalal:boolean
):Promise< IPerson|undefined> {
    try {
        const selectionArray = await filter(exeptionsPerson,day,temp,isYazdan,isJalal);   
        if(selectionArray.length ===0){
            throw 'no user for selection'
        }
        if(MinHoliday && selectionArray.length>1 && holidays.includes(day)){
            selectionArray.sort((a,b)=>a.holidays-b.holidays);
            return selectionArray[0]; 
        }        
        if(MinTwoPerson && selectionArray.length>1 && daysOfTwoPersons.includes(day)){
            selectionArray.sort((a,b)=>a.twoPersons-b.twoPersons);
            return selectionArray[0];
        }
        if(MinPerHoliday && selectionArray.length>1 && perHolidays.includes(day)){
            selectionArray.sort((a,b)=>a.perHolidays-b.perHolidays);
            return selectionArray[0];
        }

        const rand = Math.floor(Math.random() * selectionArray.length);
        return selectionArray[rand];        
    } catch (error) {
        console.log('error',error);
        return undefined;
    }
}