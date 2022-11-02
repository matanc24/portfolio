// These imports are resolved by vite to the relative path after minification

import fantasyUrl from '../../img/section-4/fantasy.png';
import forkifyUrl from '../../img/section-4/forkify.png';
import githubUsersUrl from '../../img/section-4/github.png';

export const LIGHT_THEME_NAME_IN_LOCAL_STORAGE = 'lightTheme';

// The time that will be waited in ms before inserting a character.
export const WRITING_SPEED_IN_MILLISECONDS = 90;

export const FORM_API =
  'https://getform.io/f/003c358e-025f-4b54-a072-542dd32bccbd';

export const AJAX_CALL_TIMEOUT_SECONDS = 8;

export const FORM_SUBMISSION_MESSAGE = 'Thank you! Your message has been sent.';

export const COLORS = {
  darkThemeColors: {
    backgroundColor: '#121212',
    backgroundLighterColor: '#2b2b2b',
    backgroundLightestColor: '#3b3b3b',
    accentColor: '#d364ff',
    accentColorTransparent: 'rgba(255, 100, 255, 0.2)',
    sliderBackgroundColor: 'rgba(255, 255, 255, 0.4)',
    textColorHighEmphasis: 'rgba(255, 255, 255)',
    textColorMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
    textColorLowEmphasis: 'rgba(255, 255, 255, 0.4)',
    fixedHeaderColor: 'rgba(43, 43, 43, 0.5)',
    introductionWindowColor: 'rgba(43, 43, 43, 0.6)',
    osxWindow: '#3b3b3b',
    osxBorderColor: 'transparent',
    osxDotContainerBottomBorderColor: '#000',
    inactiveDot: '#606060',
    shadow: '0px 3px 22px 0px rgba(0, 0, 0, 0.7)',
    codeArtBaseColor: '#ffffffdc',
    caretFillColor: '#ffffffdc',
    lighterAccentColor: 'rgba(255, 100, 255, 0.2)',
    aboutMeHColor: 'var(--accent-color)',
    aboutMePColor: 'var(--text-color-high-emphasis)',
    callToActionAccentColor: '#444',
    callToActionHoverAccentColor: '#d364ff',
    diagonalColor: '#1b1b1b',
    oddSiblingColor: '#232323',
    navChildHoverColor: '#757575',
  },

  lightThemeColors: {
    backgroundColor: '#fff',
    backgroundLighterColor: '#fff',
    backgroundLightestColor: '#fff',
    accentColor: '#732673',
    accentColorTransparent: '#4726732e',
    sliderBackgroundColor: '#ddd',
    textColorHighEmphasis: 'rgba(4, 4, 4, 0.8)',
    textColorMediumEmphasis: 'rgba(4, 4, 4, 0.9)',
    textColorLowEmphasis: 'rgba(4, 4, 4, 0.4)',
    fixedHeaderColor: 'rgba(247, 247, 248, 0.5)',
    introductionWindowColor: 'rgba(255, 255, 255, 0.65)',
    osxWindow: '#f0f0f0',
    osxBorderColor: '#ccc',
    osxDotContainerBottomBorderColor: '#ddd',
    inactiveDot: '#ddd',
    shadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    codeArtBaseColor: '#444',
    caretFillColor: '#444',
    lighterAccentColor: 'var(--accent-color)',
    aboutMeHColor: 'rgba(255, 255, 255, 0.9)',
    aboutMePColor: 'rgba(255, 255, 255, 0.9)',
    callToActionAccentColor: '#fff',
    callToActionHoverAccentColor: '#444',
    diagonalColor: '#f7f7f8',
    oddSiblingColor: '#f7f7f8',
    navChildHoverColor: '#ccc',
  },

  cssRules: [
    '--background-color',
    '--background-lighter-color',
    '--background-lightest-color',
    '--accent-color',
    '--accent-color-transparent',
    '--slider-background-color',
    '--text-color-high-emphasis',
    '--text-color-medium-emphasis',
    '--text-color-low-emphasis',
    '--fixed-header-color',
    '--introduction-window-color',
    '--osx-window',
    '--osx-border-color',
    '--osx-dot-container-bottom-border-color',
    '--inactive-dot',
    '--shadow',
    '--code-art__base-color',
    '--caret-fill-color',
    '--lighter-accent-color',
    '--about-me-h-color',
    '--about-me-p-color',
    '--call-to-action-text-color',
    '--call-to-action-hover-text-color',
    '--diagonal-color',
    '--odd-sibling-color',
    '--nav-child-hover-color',
  ],
};

// 1 subarray per color, to make new line insert "\n at the end."
export const SCRIPT = [
  ['red', 'import '],
  ['code-art__base-color', 'Developer '],
  ['red', 'from '],
  ['code-art__base-color', '"'],
  ['yellow', './Developer'],
  ['code-art__base-color', '";\n\n'],
  ['blue', 'class MatanCohen '],
  ['red', 'extends '],
  ['blue', 'Developer '],
  ['code-art__base-color', '{ \n'],
  ['blue', '  constructor'],
  ['code-art__base-color', '() {\n'],
  ['gray', '    super'],
  ['yellow', '()'],
  ['code-art__base-color', ';\n'],
  ['gray', '    this.'],
  ['code-art__base-color', 'age '],
  ['red', '= new '],
  ['green', 'Date'],
  ['code-art__base-color', '().'],
  ['green', 'getFullyear'],
  ['code-art__base-color', '()'],
  ['red', ' - '],
  ['purple', '1989'],
  ['code-art__base-color', ';\n'],
  ['gray', '    this.'],
  ['code-art__base-color', 'favSkills'],
  ['red', ' = '],
  ['code-art__base-color', '{ \n'],
  ['code-art__base-color', '      teamOriented: '],
  ['purple', '10'],
  ['gray', ',\n'],
  ['code-art__base-color', '      determination: '],
  ['purple', '10'],
  ['gray', ',\n'],
  ['code-art__base-color', '      persistance: '],
  ['purple', '10'],
  ['gray', ',\n'],
  ['code-art__base-color', '      };\n'],
  ['gray', '    this.'],
  ['code-art__base-color', 'hasPassion'],
  ['red', ' = '],
  ['purple', 'true'],
  ['code-art__base-color', ';\n'],
  ['code-art__base-color', '    }\n'],
  ['code-art__base-color', '    #givesUp '],
  ['red', '= '],
  ['purple', 'null'],
  ['code-art__base-color', ';\n\n'],
  ['green', '    code'],
  ['orange', '(hrs) '],
  ['code-art__base-color', '{...\n'],
  ['code-art__base-color', '    }\n\n'],
  ['green', '    drinkCoffee'],
  ['orange', '(cups) '],
  ['code-art__base-color', '{...\n'],
  ['code-art__base-color', '    }\n'],
  ['code-art__base-color', '}\n\n'],
  ['red', 'export default new '],
  ['green', 'MatanCohen'],
  ['red', '()'],
  ['code-art__base-color', ';'],
];

// This object's members are the markup rendered in the different "OSX Windows".
export const WINDOW_MARKUP = {
  contactInfo: `
<div class="regular-window__wrapper" translate="yes">
    <h3 class="regular-window__main-text">Hi, Matan here!</h3>
    <p class="regular-window__message">
      These are the ways you can contact me:
    </p>

    <div class="window-items">
      <div class="window-item">
        <label>Primary email address (Preferred):</label>
        <a
          href="mailto:matancohenn89@gmail.com?subject=From Matan Cohen's portfolio:&nbsp;"
        >
          <p>matancohenn89@gmail.com</p>
        </a>
      </div>

      <div class="window-item">
        <label>Secondary email address:</label>
        <a
          href="mailto:matanc24@gmail.com?subject=From Matan Cohen's portfolio:&nbsp;"
          target="_blank"
        >
          <p>matanc24@gmail.com</p>
        </a>
      </div>
      <div class="window-item">
        <label>Phone number (for calls, WhatsApp and Telegram):</label>
        <a class="footer-link__item" href="tel:+972 528799200" target="_blank">
          <p>+972 528-799-200</p>
        </a>
      </div>

      <div class="window-item">
        <label>Instagram username:</label>
        <a href="https://www.instagram.com/matancohen89/" target="_blank"
          ><p>@matancohen89</p></a
        >
      </div>

      <div class="window-item">
        <label>Twitter username:</label>
        <a href="https://twitter.com/matanc24" target="_blank"
          ><p>@matanc24</p></a
        >
      </div>

      <div class="window-item">
        <label>Discord username:</label>
        <p>ChucKyDee38#8434</p>
      </div>
    </div>
  </div>
  `,

  favoriteResources: `
<div class="regular-window__wrapper" translate="yes">
    <h3 class="regular-window__main-text">Hello world!</h3>
    <p class="regular-window__message">
      These are some of my favorite learning resources and I recommend them
      100%. They are packed with valuable content and new skills you can
      learn. Check them out! 👨🏽‍🎓
    </p>

    <div class="window-items" translate="no">
      <div class="window-item">
        <a
          href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
          target="_blank"
        >
          <p>
            <span class="resources__emoji">👉🏽&nbsp;</span>Build Responsive
            Real-World Websites with HTML and CSS
          </p>
        </a>
      </div>
      <div class="window-item">
        <a
          href="https://www.udemy.com/course/the-complete-javascript-course/"
          target="_blank"
        >
          <p>
            <span class="resources__emoji">👉🏽&nbsp;</span>The complete
            JavaScript Course 2022
          </p>
        </a>
      </div>
      <div class="window-item">
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          target="_blank"
        >
          <p>
            <span class="resources__emoji">👉🏽&nbsp;</span>React - The Complete
            Guide (incl Hooks, React Router, Redux)
          </p>
        </a>
      </div>
      <div class="window-item">
        <a href="https://www.youtube.com/c/WebDevSimplified/" target="_blank">
          <p>
            <span class="resources__emoji">👉🏽&nbsp;</span>Web Dev Simplified
          </p>
        </a>
      </div>
      <div class="window-item">
        <a
          href="https://www.youtube.com/c/programmingwithmosh/"
          target="_blank"
        >
          <p>
            <span class="resources__emoji">👉🏽&nbsp;</span>Programming With Mosh
          </p>
        </a>
      </div>
      <div class="window-item">
        <a href="https://www.youtube.com/c/TraversyMedia/" target="_blank">
          <p><span class="resources__emoji">👉🏽&nbsp;</span>Traversy Media</p>
        </a>
      </div>
      <div class="window-item">
        <a href="https://www.youtube.com/c/dcode-software/" target="_blank">
          <p><span class="resources__emoji">👉🏽&nbsp;</span>dcode</p>
        </a>
      </div>
      <div class="window-item">
        <p translate="yes">
          And since being a developer is not just about programming, you must
          first develop your mind: 🧠💆🏽‍♂️
        </p>

      </div>
    </div>
  </div>
  `,
};

// Images markup must be in the same order as they are supposed to appear.
export const PROJECT_IMAGES_MARKUP = [
  `<img
  class="project-img"
  src="${fantasyUrl}"
  alt="Project screenshots"
/>`,

  `<img
class="project-img"
src="${githubUsersUrl}"
alt="Project screenshots"
/>`,

  `<img
class="project-img"
src="${forkifyUrl}"
alt="Project screenshots"
/>`,
];

export const PDFJS_KEY = 'S5Ita69AZlepHx3w366q';
