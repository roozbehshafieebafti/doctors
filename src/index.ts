import {
    daysOfTwoPersons,
    IPerson,
    IResult,
    month,
    person,
    times
} from './data';
import { makeView } from './makeView';
import { select } from './select';
import { updatePersonAfterSelection } from './updatePersonAfterSelection';
import { updatePersonBeforeSelection } from './updatePersonBeforeSelection';

let lastPersonUpdate:IPerson[];
let result:IResult={};

async function run() {
    let temp = JSON.parse(JSON.stringify(person));
    for (let i = 1; i <= month.length; i++) {
        const updatePersonBefore = await updatePersonBeforeSelection(temp,i);
        let isYazdan=false, isJalal=false;


        // first clerck
        const first = await select([],i,updatePersonBefore,isYazdan,isJalal);
        if(!first){break}

        if(!isYazdan && !isJalal){
            isYazdan = first.id === 6 ? true : false;
            isJalal = first.id === 7 ? true : false;
        }

        // second clerck
        const second = await select([first.id],i,updatePersonBefore,isYazdan,isJalal);
        if(!second){break}

        if(!isYazdan && !isJalal){
            isYazdan = second.id === 6 ? true : false;
            isJalal = second.id === 7 ? true: false;
        }

        if(!daysOfTwoPersons.includes(i)){
            // third clerck
            const third = await select([first.id,second.id],i,updatePersonBefore,isYazdan,isJalal);
            if(!third){break}
            result[`${i}`] = [first,second,third];
            temp = await updatePersonAfterSelection(updatePersonBefore,i,first,second,third)
        }
        else{
            result[`${i}`] = [first,second];
            temp = await updatePersonAfterSelection(updatePersonBefore,i,first,second)
        }

        lastPersonUpdate = temp;
    }
}


const program = async()=>{
    for (let j = 0; j < 500; j++) {
        let loopindex=0;
        let hasAnswer=true;
        while(Object.keys(result).length !== month.length){
            loopindex++;
            await run();
            if(loopindex === times){
                hasAnswer = false;
                break;
            }
        }
        if(hasAnswer){
            makeView(result,lastPersonUpdate);
            console.log('>>',j);
            break;
        }
    }
}

program();