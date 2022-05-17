import { IPerson, maxCount, maxContinues, DaysOfNotJalalAndYazdan, JalalYazdanFilter } from "./data";

export async function filter(
    exeptionsPerson:number[],
    day:number,
    temp:IPerson[],
    isYazdan:boolean,
    isJalal:boolean
):Promise<IPerson[]> {
    let Minues1Array:IPerson[];
    if(DaysOfNotJalalAndYazdan.includes(day)){
        const PromiseMinues1Array = temp.filter((item)=>{
            if(item.id !== 6 && item.id !== 7){
                return new Promise(res=>res(item));
            }
        });
        Minues1Array = await Promise.all(PromiseMinues1Array);
    }
    else{
        Minues1Array = [...temp];
    }

    // not repetitive worker
    const PromiseZeroArray = Minues1Array.filter((item)=>{
        if(!exeptionsPerson.includes(item.id)){
            return new Promise(res=>res(item));
        }
    });
    const ZeroArray = await Promise.all(PromiseZeroArray);


    // count filtter
    const PromiseFirstArray = ZeroArray.filter((item)=>{
        if(item.count<maxCount){
            return new Promise(res=>res(item))
        }
    })
    const FirstArray = await Promise.all(PromiseFirstArray);

    // Flag48 filtter
    const PromiseSecondArray = FirstArray.filter((item)=>{
        if(item.flag48 === false){
            return new Promise(res=>res(item))
        }
    });
    const SecondArray = await Promise.all(PromiseSecondArray);


    // countinues filtter
    const PromiseThirdArray = SecondArray.filter((item)=>{
        if(item.countinues<maxContinues){
            return new Promise(res=>res(item));
        }
    });
    const ThirdArray = await Promise.all(PromiseThirdArray);

    // notWorkingDays filtter
    const PromiseFourthArry = ThirdArray.filter((item)=>{
        if(!item.notWorkingDays.includes(day)){
            return new Promise(res=>res(item));
        }
    });
    const FourthArry = await Promise.all(PromiseFourthArry);

    if(JalalYazdanFilter && isYazdan){
        // filter jalal
        const PromisefifthArry = FourthArry.filter((item)=>{
            if(item.id !== 7){
                return new Promise(res=>res(item));
            }
        });

        const fifthArry = await Promise.all(PromisefifthArry);
        return fifthArry;
    }

    if(JalalYazdanFilter && isJalal){
        // filter yazdan
        const PromisefifthArry = FourthArry.filter((item)=>{
            if(item.id !== 6){
                return new Promise(res=>res(item));
            }
        });

        const fifthArry = await Promise.all(PromisefifthArry);
        return fifthArry;
    }

    return FourthArry;
}