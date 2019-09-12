export default class ButtonBubble {
  constructor(button) {
    this.button = button
    this.bubble = document.createElement('span')
    this.bubble.className = 'button__bubble'
    button.appendChild(this.bubble)
    this._events()
  }

  _events() {
    this.button.addEventListener('mouseleave', this.positionBubble.bind(this))
    this.button.addEventListener('mouseenter', this.positionBubble.bind(this))
    this.button.addEventListener('focusin', this.centerBubble.bind(this))
    this.button.addEventListener('focusout', this.centerBubble.bind(this))
  }

  positionBubble({ offsetX, offsetY }) {
    const xRadius = Math.max(offsetX, this.button.offsetWidth - offsetX)
    const yRadius = Math.max(offsetY, this.button.offsetHeight - offsetY)
    const radius = Math.sqrt(xRadius * xRadius + yRadius * yRadius)
    Object.assign(this.bubble.style, {
      left: `${offsetX}px`,
      top: `${offsetY}px`,
      padding: `${radius}px`
    })
  }

  centerBubble() {
    this.positionBubble({
      offsetX: this.button.offsetWidth / 2,
      offsetY: this.button.offsetHeight / 2
    })
  }
}
