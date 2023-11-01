/**
 * Main Menu
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class MainMenu {

  constructor(url1, url2) {
    this.elems = document.querySelectorAll('[data-toggle="submenu"]');
    if (!this.elems) return;

    this.handleEvents();

  }


  handleEvents() {
    this.elems.forEach((elem) => {
      elem.addEventListener('mouseenter', (event) => {
        event.preventDefault();
        const target = event.target.dataset.target;
        this.show(target);
      });
      
      elem.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        const target = event.target.dataset.target;
        this.hide(target);
      });
    });

  }


  show(target) {
    const menu = document.getElementById(target);
    menu.classList.remove('--collapse');

  }


  hide(target) {
    const menu = document.getElementById(target);
    menu.classList.add('--collapse');
    
  }

}
