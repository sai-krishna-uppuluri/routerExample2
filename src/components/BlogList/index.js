import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-item-container">
      <ul className="blog-item">
        {blogsList.map(eachBlog => (
          <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
