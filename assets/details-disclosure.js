class DetailsDisclosure extends HTMLElement {
  constructor() {
    super()
    this.mainDetailsToggle = this.querySelector('details')
    this.mainDetailsToggle.addEventListener(
      'focusout',
      this.onFocusOut.bind(this)
    )
    this.parentElement.addEventListener('mouseover', this.open.bind(this))
    this.parentElement.addEventListener('mouseleave', this.close.bind(this))
  }
  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close()
    })
  }

  open() {
    this.mainDetailsToggle.setAttribute('open', true)
    this.mainDetailsToggle
      .querySelector('summary')
      .setAttribute('aria-expanded', true)
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open')
    this.mainDetailsToggle
      .querySelector('summary')
      .setAttribute('aria-expanded', false)
  }
}
customElements.define('details-disclosure', DetailsDisclosure)
