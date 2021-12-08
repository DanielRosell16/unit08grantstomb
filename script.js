document.querySelector('header > h1').textContent = "Grant's Tomb"
document.querySelector('header > h2').textContent = "Literal Objects"
document.querySelector('main > h3').textContent = "The Question of the Day"


const questions = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Hillary",
    option4: "Daniel",
    correct: 2,
    display: () => {
        document.querySelector("#stem").textContent = questions.stem
    },
    check: (userChoice) => {
        if (userChoice === questions.correct) {
            document.querySelector('#feedback').textContent = "You are correct"
        } else {
            document.querySelector('#feedback').textContent = "You are incorrect! Try again!"
        }

    }
}

document.querySelector("#answer1").addEventListener('click', () => questions.check(1))
document.querySelector("#answer2").addEventListener('click', () => questions.check(2))
document.querySelector("#answer3").addEventListener('click', () => questions.check(3))
document.querySelector("#answer4").addEventListener('click', () => questions.check(4))

questions.display()
