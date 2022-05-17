import { IPerson, IResult } from "./data";

export function makeView(result:IResult,lastPersonUpdate:IPerson[]) {
    
    const table = document.createElement('table');
    document.body.appendChild(table);
    const header = document.createElement('tr');
    const h1 = document.createElement('th'); h1.innerHTML = 'روز';
    const h2 = document.createElement('th'); h2.innerHTML = 'جایگاه اول';
    const h3 = document.createElement('th'); h3.innerHTML = 'جایگاه دوم';
    const h4 = document.createElement('th'); h4.innerHTML = 'جایگاه سوم';
    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(h3);
    header.appendChild(h4);
    table.appendChild(header);

    Object.keys(result).map((key)=>{
        const tr = document.createElement('tr');
        const number = document.createElement('td');
        number.innerHTML = key;
        tr.appendChild(number);
        result[key].map((item)=>{
            const td = document.createElement('td');
            td.innerHTML = item.name;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });


    const PersonTable = document.createElement('table');
    document.body.appendChild(PersonTable);
    const header1 = document.createElement('tr');
    const h12 = document.createElement('th'); h12.innerHTML = 'id';
    const h22 = document.createElement('th'); h22.innerHTML = 'name';
    const h32 = document.createElement('th'); h32.innerHTML = 'count';
    const h42 = document.createElement('th'); h42.innerHTML = 'twoPersons';
    const h5 = document.createElement('th'); h5.innerHTML = 'perHolidays';
    const h6 = document.createElement('th'); h6.innerHTML = 'holidays';
    const h7 = document.createElement('th'); h7.innerHTML = 'offCount';
    const h8 = document.createElement('th'); h8.innerHTML = 'flag48';
    const h9 = document.createElement('th'); h9.innerHTML = 'dayOFFlag48';
    const h10 = document.createElement('th'); h10.innerHTML = 'countinues';
    const h11 = document.createElement('th'); h11.innerHTML = 'lastDayOfWork';
    const h112 = document.createElement('th'); h112.innerHTML = 'notWorkingDays';

    header1.appendChild(h12);
    header1.appendChild(h22);
    header1.appendChild(h32);
    header1.appendChild(h42);
    header1.appendChild(h5);
    header1.appendChild(h6);
    header1.appendChild(h7);
    header1.appendChild(h8);
    header1.appendChild(h9);
    header1.appendChild(h10);
    header1.appendChild(h11);
    header1.appendChild(h112);
    PersonTable.appendChild(header1);
    lastPersonUpdate.map((item)=>{
        const tr = document.createElement('tr');
        Object.keys(item).map((key)=>{
            const td = document.createElement('td');
            td.innerHTML = `${(item as any)[key]}`;
            tr.appendChild(td);
        });
        PersonTable.appendChild(tr);
    })
}