const userDataForm = {
    topicNew: document.getElementById('topic'),
    generateLotoButton: document.getElementById('btnLotoButton'),
    outputParagraph: document.getElementById('outputParagraph'),

    generateLoto: function () {
        const randomNum = Math.floor(Math.random() * 36) + 1
        return randomNum;
    },

    generateArr: function () {
        const randomArr = []
        for (let i = 0; i <= 5; i++) {
            randomArr.push(this.generateLoto())
        }
        let min = randomArr[0];
        let max = randomArr[0];
        let avr = 0;
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] < min) {
                min = randomArr[i];
            }
            if (randomArr[i] > max)
                max = randomArr[i];
            avr += randomArr[i];
        }
        avr = avr / randomArr.length;

        this.topicNew.textContent = 'Generated numbers: ' + JSON.stringify(randomArr);
        this.outputParagraph.textContent = 'Your magic numbers: ' + JSON.stringify({
            Loto: randomArr,
            Min: min,
            Max: max,
            Average: avr
        })
    }
}
userDataForm.generateLotoButton.addEventListener('click', function () {
    userDataForm.generateArr();
});