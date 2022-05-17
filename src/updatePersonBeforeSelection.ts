import { IPerson } from "./data";

export async function updatePersonBeforeSelection(person:IPerson[],day:number,): Promise<IPerson[]>{
    const PromiseUpdate:Promise<IPerson>[] = person.map((item)=>{
        let answer:IPerson;
        if(item.dayOFFlag48 === day-2){
            answer ={
                ...item,
                flag48:false,
                dayOFFlag48:-3
            };
        }
        else{
            answer = {...item};
        }

        if((day - item.lastDayOfWork)>2){
            answer = {
                ...answer,
                countinues:0
            };
        }
        return new Promise(res=>res(answer));
    });

    const Update= await Promise.all(PromiseUpdate);

    return Update;
}