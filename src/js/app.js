export default class Collapse {
  // eslint-disable-next-line class-methods-use-this
  init() {
    const button = document.querySelector('.button');
    const btnBox = document.querySelector('.button-box');

    button.addEventListener('click', () => {
      btnBox.classList.toggle('active');
    });
  }
}
