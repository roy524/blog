import { defineConfig } from 'vitepress';

import type { Config as ThemeConfig } from '@vue/theme'

import getPages from './utils/getPages'

const nav: ThemeConfig['nav'] = [
  
]

const sidebar: ThemeConfig['sidebar'] = [

]

const getConfig = async() => {
  return {
    title: "Roy's blog",
    srcDir: 'src',
    themeConfig: {
      pages: await getPages(),
      nav,
      sidebar
    }
  }
}

export default defineConfig(await getConfig())