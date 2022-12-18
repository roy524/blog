import fs from 'fs-extra';
import matter from 'gray-matter';
import { globby } from 'globby';

const getPages = async () => {
  const paths = await globby(['src/**.md'], {
    ignore: ['node_modules']
  })

  let pages = await Promise.all(
    paths.map(async (path) => {
      const content = await fs.readFile(path, 'utf-8');
      const { data } = matter(content)
      return {
        frontMatter: data,
        regularPath: `/${path.replace(".md", ".html")}`,
        relativePath: path,
      }
    })
  )

  pages = pages.filter((item) => !item.frontMatter.page)

  return pages
}

export default getPages