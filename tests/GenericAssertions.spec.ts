import {test,expect} from '@playwright/test';


test("Automation practice",async({page})=>{


    let value1=3;
    let value2=3;

    expect(value1).toBe(3);

    let str1="string";
    let str2="string";

    expect(str1).toBe(str2);

    expect(0.1+0.2).toBeCloseTo(0.3);

    const obj1={

        prop:2
    };

    const obj2={

        prop:2
    }

    expect(obj1).toEqual(obj2);
    expect(obj1.prop).toBe(obj2.prop);
    expect(obj1).not.toBe(obj2);

    let str3:string;
    str3='"Hello world';

    expect(str3).toContain("world");
    expect(str3).toContain("wor");
    expect(str3).toContain("ld");


    const arr1=[1,2,3,4,5,6,7,8]

    expect(arr1).toContain(7);

    


    let str11="string";
    str1="Hello world"

    expect(str1).toHaveLength(11)

    const array=[1,7,87,9,6];

    expect(array).toHaveLength(5)

    let status=false;

    expect(status).toBeFalsy();
    //expect(status).toBeTruthy();


    


    
})
