function devide(value1: number, value2: number): string {

    let result = value1 / value2;

    return `Devide value ${result}`
};


function power(value1: number, value2: number){

    let result = value1 ** value2;

    return `Power value ${result}`;
}


function modulus(value1: number, value2: number){
    
    let result = value1 % value2;

    return `modulus value ${result}`;
}

let All_Data = {
    devide,
    power,
    modulus
}

export default All_Data;
// is key word ko data export karne ke liye sirf aik dafa use kar sakty hain pori file mein 