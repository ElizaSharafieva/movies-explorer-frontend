import './Subtitle.css';

function Subtitle(props) {
  return (
    <div className="subtitle-container">
      <h2 className="subtitle">{props.title}</h2>
    </div>

  )
}

export default Subtitle;
