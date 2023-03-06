import './index.css'

const BlogItem = props => {
  const {eachBlog} = props

  const {title, description, publishedDate} = eachBlog

  return (
    <li>
      <div className="post-header-container">
        <h1 className="heading"> {title}</h1>
        <p className="sub-heading">{publishedDate}</p>
      </div>
      <p className="sub-heading"> {description}</p>
    </li>
  )
}

export default BlogItem
