const questions =[
    "How are you today?",
    "What did you learn today?",
    "What is the achievement of the day?",
    "Be grateful for something:",
]

const ask = (i = 0) => {
    process.stdout.write("\n" + questions[i] + " > ")
}

ask ()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)

    }else{
        console.log(answers)
        process.exit()

    }

})

process.on('exit', () => {
    console.log(`
    Congratualions Jessany Kaline!

    How do you feel today is:
    ${answers[0]}

    What you learned today was:
    ${answers[1]}

    Today you conquered:
    ${answers[2]}

    Be grateful for:
    ${answers[3]}

    Come back tomorrow for more learnings!

    `)
})