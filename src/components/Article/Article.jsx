import './Article.css';

function Article(props) {
  return (
    <div className="article">
      <h2 className="article__title">{props.title}</h2>
      <p className="article__text">{props.text}</p>
    </div>

  )
}

export default Article;
