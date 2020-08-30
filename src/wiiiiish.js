export default class Wiiiiish {
  timeouts = []
  wishes = []

  constructor(options) {
    this.options = Object.assign({
      itemsSelector: '#w-list',
      targetSelector: '#w-container',
      triggerSelector: '#w-trigger',
      removalDelay: 300,
      addDuration: 700,
      pause: 100
    }, options)

    this.$trigger = document.querySelector(this.options.triggerSelector)
    this.$wishText = document.querySelector(this.options.targetSelector)

    document.querySelectorAll(`${this.options.itemsSelector} li`).forEach((wish) => {
      this.wishes.push(wish.innerHTML)
    })

    this.$trigger.addEventListener('click', this.updateText, false)
  }

  addText = () => {
    this.$wishText.classList.add('is-typing')

    let newIndex = Math.floor(Math.random() * this.wishes.length)

    while (this.currentIndex === newIndex) {
      newIndex = Math.floor(Math.random() * this.wishes.length)
    }

    this.currentIndex = newIndex

    let letters = this.wishes[newIndex].split('')
    let chunks = []

    letters[0] = `<span>${letters[0]}</span>`

    letters.reduce(function (accumulator, currentValue) {
      const chunk = `${accumulator}<span>${currentValue}</span>`
      chunks.push(chunk)
      return chunk
    })

    chunks.forEach((chunk, i) => {
      this.timeouts.push(setTimeout(() => {
        this.$wishText.innerHTML = chunk
      }, i * this.options.pause))
    })
  }

  clear = () => {
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i])
    }
  }

  removeText = () => {
    this.$wishText.innerHTML = ''
  }

  selectText = () => {
    document.querySelectorAll(`${this.options.targetSelector} span`).forEach((span) => {
      span.classList.add('is-selected')
    })
  }

  updateText = () => {
    this.$wishText.classList.remove('is-typing')

    this.selectText()
    this.clear()

    this.timeouts = [
      setTimeout(this.removeText, this.options.removalDelay),
      setTimeout(this.addText, this.options.removalDelay + this.options.addDuration)
    ]
  }
}
