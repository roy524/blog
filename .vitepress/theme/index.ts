import DefaultTheme from 'vitepress/theme'
import './custom.css';

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404'
}