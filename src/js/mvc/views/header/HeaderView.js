import { isTouchScreendevice } from '../../../helpers';
import Views from '../Views';
import { throttle } from 'lodash';
class Header extends Views {
  navElement = document.querySelector('nav');
  navChildren = Array.from(this.navElement.children);
  #lastScrolled = 0;

  init(handler) {
    this.navChildren.forEach((child) => {
      child.addEventListener('mouseenter', (e) => {
        this.navOnMouseEnter(e);
      });
    });

    this.navElement.addEventListener('click', (e) => {
      if (e.target.closest('.nav-lbl__about-me'))
        handler.scrollToElement(this.sections.at(1));
      if (e.target.closest('.nav-lbl__projects'))
        handler.scrollToElement(this.sections.at(3));
      if (e.target.closest('.nav-lbl__resume')) handler.openResume();
    });

    // Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.
    const showOrHide = throttle(
      function () {
        const currentScroll = window.scrollY;
        if (
          currentScroll > this.#lastScrolled &&
          this.sections[1].getBoundingClientRect().top < 0
        )
          this.fix();
        if (
          currentScroll < this.#lastScrolled &&
          this.sections[0].getBoundingClientRect().bottom > 0
        )
          this.unfix();
        this.#lastScrolled = window.scrollY;
      },
      500,
      { leading: false, trailing: true }
    ).bind(this);
    document.addEventListener('scroll', showOrHide);
  }

  // Controls nav hovering
  navOnMouseEnter(e) {
    if (isTouchScreendevice()) return;
    const reset = (element) => {
      element.style.color = 'var(--text-color-high-emphasis)';
      element.style.filter = 'none';
    };

    // Add styles to all children elements of nav
    this.navChildren.forEach((child) => {
      child.style.filter = 'blur(2px)';
      child.style.color = 'var(--nav-child-hover-color)';
    });

    // Remove styles on target element
    e.target.style.color = 'var(--accent-color)';
    e.target.style.filter = 'none';

    this.navElement.addEventListener('mouseleave', () => {
      this.navChildren.forEach((child) => {
        // Remove all styles when mouse leaves nav bar
        reset(child);
      });
    });
  }

  fix() {
    if (this.header.classList.contains('fixed-header')) return;
    // 1) Add offset
    this.header.classList.add('fixed-header-offset');
    setTimeout(() => {
      // 2) Add body margin and Add fixed-header after transition
      document.querySelector('body').style.marginTop = '50px';
      this.header.classList.add('fixed-header');
      // 3) Remove offset
      this.header.classList.remove('fixed-header-offset');
    }, 420);
  }

  unfix() {
    if (!this.header.classList.contains('fixed-header')) return;
    // 1) Add offset
    this.header.classList.add('fixed-header-offset');
    setTimeout(() => {
      document.querySelector('body').style.marginTop = '0';
      this.header.classList.remove('fixed-header');
      // 2) Remove offset
      this.header.classList.remove('fixed-header-offset');
    }, 420);
  }
}

export default new Header();
