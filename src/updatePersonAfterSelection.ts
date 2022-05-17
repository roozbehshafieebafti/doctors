import { IPerson, holidays, perHolidays, daysOfTwoPersons } from "./data";

export async function updatePersonAfterSelection(
    person: IPerson[],
    day:number,
    first: IPerson,
    second: IPerson,
    third?: IPerson
) {

    const PromisePerson =  person.map((item)=>{
        if((item.id === first.id) || (item.id === second.id) || (third && item.id === third.id)){
            const  updateHoliday = holidays.includes(day);
            const  updatePerHoliday = perHolidays.includes(day);
            const  updateTwoPersons = daysOfTwoPersons.includes(day);
            return new Promise(res=>{res({
                ...item,
                count: item.count+1,
                flag48:true,
                dayOFFlag48:day,
                countinues: item.countinues + 1,
                lastDayOfWork:day,
                perHolidays: updatePerHoliday ? item.perHolidays + 1 : item.perHolidays,
                holidays: updateHoliday ? item.holidays + 1 : item.holidays,
                twoPersons : updateTwoPersons ? item.twoPersons + 1 : item.twoPersons
            })});
        }
        else {
            return new Promise(res=>res(item));
        }
    });

    const newPerson = await Promise.all(PromisePerson);

    return newPerson;
}