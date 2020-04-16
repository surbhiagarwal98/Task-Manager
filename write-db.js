const {db, Tasks, Notes} = require('./db')

// adding some initial tasks
async function addTask(){
    await db.sync()

    await Tasks.bulkCreate([
        {
            title: 'Basic Java',
            description: 'Learning Basics of Java'
        },
        {
            title: 'Advance Java',
            description: 'Learning Java in advance'
        },
        {
            title: 'Node js',
            description: 'Learning Node js'
        }
    ])

    await Notes.bulkCreate([
            {taskId: 1, note: 'Use Ecplise IDE'},
            {taskId: 2, note: 'Use Maven and Ant'},
            {taskId: 2, note: 'Use MySQL'},
            {taskId: 2, note: 'Use VS Code'}
    ])
}

addTask()