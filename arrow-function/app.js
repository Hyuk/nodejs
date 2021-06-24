const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    },{
        text: 'Film course',
        completed: false
    }],
    getTaskToDo() { // method를 정의할때는 Arrow function을 사용하지 않는다.
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTaskToDo())