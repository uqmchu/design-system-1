// import styles
import './side-nav.scss';

// import scripts
import sideNavJS from '@uqds/side-nav/src/js/side-nav.es6';

// import HTML template strings
import sideNavMultiLevelHTML from './side-nav-multi-level.html';

import docs from './side-nav.docs.mdx';

export default {
  title: 'Components/Side nav',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const sideNavSingleLevel = () => {
  return `
  <!-- Side nav single-level -->
  <div class="uq-side-nav">
    <!-- Parent page title -->
    <h3 class="uq-side-nav__title">
      <a href="#" class="uq-side-nav__title-link">Parent page title</a>
    </h3>
    <!-- Side nav -->
    <nav class="uq-side-nav__container" aria-label="Side navigation" id="jsSideNav">
      <ul class="uq-side-nav__list uq-side-nav__list--level-1">
        <li class="uq-side-nav__list-item uq-side-nav__list-item--active">
          <a href="#" class="uq-side-nav__link">Sibling list1</a>
        </li>
        <li class="uq-side-nav__list-item">
          <a href="#" class="uq-side-nav__link">Sibling list2</a>
        </li>
        <li class="uq-side-nav__list-item">
          <a href="#" class="uq-side-nav__link">Sibling list3</a>
        </li>
      </ul>
    </nav>
  </div>
`
};

sideNavSingleLevel.storyName = 'Side nav single-level';

export const sideNavMultiLevel = () => {
  useEffect(() => {
      var navelement = document.getElementById("jsSideNav");
      var nav = new sideNavJS(navelement, "uq-side-nav__container");
    });
  return sideNavMultiLevelHTML;
};

sideNavMultiLevel.storyName = 'Side nav multi-level';