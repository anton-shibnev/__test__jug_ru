import { importAll } from '@/js/main';

// onload
document.addEventListener('DOMContentLoaded', () => {
  importAll(require.context('./components/', true, /\.js$/));
  importAll(require.context('../_includes/', true, /\.js$/));

  // listeners
  // scrollEvents();
});

import './index.scss';
