import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

const postsDirectory = path.join(process.cwd(), "src/posts")

export function getSortedPostsMetadata() {

  const allPosts = glob.sync(`${postsDirectory}/**/*.md`).map((filePath) => {
    const postId = path.basename(path.dirname(filePath))
    const postPath = `${postId}/${path.basename(filePath)}`
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      ...matterResult.data,
      id: postId,
      href: `/blog/${postPath}`,
      file: postPath,
    }
  }).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  return allPosts

}



export function getAllPostsIds() {
  const allPosts = getSortedPostsMetadata()
  return allPosts.map((post) => {
    return {
      params: {
        id: post.id
      }
    }
  })
}

export function getPostData(id) {
  const allPosts = getSortedPostsMetadata()
  const post = allPosts.find((post) => post.id === id)
  return post

}
