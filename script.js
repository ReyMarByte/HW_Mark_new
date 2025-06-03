const userDataForm = {
    topicNew: document.getElementById('topic'),
    generateLotoButton: document.getElementById('btnLotoButton'),
    outputParagraph: document.getElementById('outputParagraph'),

    generateLoto: function () {
        const randomNum = Math.floor(Math.random() * 36) + 1
        return randomNum
    },

    generateArr: function () {
        const randomArr = []
        while (randomArr.length < 6) {
            let newVal = this.generateLoto()
            if (randomArr.indexOf(newVal) === -1) {
                randomArr.push(newVal)
            }
        }

        randomArr.sort(function (a, b) {
            return b - a
        })

        let min = randomArr[0]
        let max = randomArr[0]
        let avr = 0
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] < min) {
                min = randomArr[i]
            }
            if (randomArr[i] > max) {
                max = randomArr[i]
            }
            avr += randomArr[i]
        }
        avr = avr / randomArr.length
        avr = parseFloat(avr.toFixed(2))

        this.topicNew.textContent = 'Generated numbers: ' + JSON.stringify(randomArr)
        this.outputParagraph.textContent = 'Your magic numbers: ' + JSON.stringify({
            Loto: randomArr,
            Min: min,
            Max: max,
            Average: avr
        })
    }
}

userDataForm.generateLotoButton.addEventListener('click', function () {
    userDataForm.generateArr()
})
