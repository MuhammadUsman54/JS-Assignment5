// Here an empty arrar
var toDoList = [];

// adding here data by using "push" method of the array
toDoList.push('Respect the elder');
toDoList.push('Enjoy your Life');
toDoList.push('Go to the office');

// adding here data by using "unshift" method of the array
toDoList.unshift('Wake up early');
toDoList.unshift('clean the house');

console.log('toDoList:(start from here)' ,  toDoList);

// removing here data by using "pop" method of the array
var completingTask =toDoList.pop();
console.log('completedTask:(removing sentence from the end)' , completingTask);

// removing here data by using "shift" method of the array
completingTask =toDoList.shift();
console.log('completedTask:(removing sentence from the start)' , completingTask);

// also there is a updated data of toDoList
console.log('toDoList:(UPDATED)' , toDoList);
