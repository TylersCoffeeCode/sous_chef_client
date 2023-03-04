const MealCard = (props) => {

    return (
      <div className="meal-card" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt="meal-image" />
        </div>
        <div className="info-wrapper">
          <h3>{props.name}</h3>
          <h2>By: {props.owner}</h2>
        </div>
      </div>
    )
  }
  
  export default MealCard