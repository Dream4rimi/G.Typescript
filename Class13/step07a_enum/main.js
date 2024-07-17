let Data = [];
let object = {
    name: "shoaib",
    age: 23,
    result: true
};
let object_2 = {
    name: "azlaan",
    age: 4,
    result: true
};
Data.push(object_2);
Data.push({
    name: "ali",
    age: 20,
    result: false
});
console.log(object, object.name);
console.log(Data, Object.keys(Data[1]));
console.log(Data, Object.values(Data[1]));
console.log(Data, Object.entries(Data[1]));
export {};
// Output:
// { name: 'shoaib', age: 23, result: true } shoaib
// [ { name: 'ali', age: 20, result: false } ] [ 'name', 'age', 'result' ]
// [ { name: 'ali', age: 20, result: false } ] [ 'ali', 20, false ]
// [ { name: 'ali', age: 20, result: false } ] [ [ 'name', 'ali' ], [ 'age', 20 ], [ 'result', false ] ]
