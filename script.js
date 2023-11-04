const advice = document.querySelector('.advice');
const dice = document.getElementById('dice');
const adviceId = document.querySelector('.advice-id');

dice.addEventListener('click', getAdvice)

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        const randomAdvice = data.slip.advice
        const randomAdviceId = data.slip.id

        advice.textContent = randomAdvice
        adviceId.textContent = randomAdviceId
    } catch(err) {
        console.error(err)
        advice.textContent = 'Opps! looks like something went wrong'
    }
}