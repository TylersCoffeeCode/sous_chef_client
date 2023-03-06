const MealCard = (props) => {

    return (
      <div className="meal-card" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.picture} alt="meal-picture" />
        </div>
        <div className="info-wrapper">
          <h3>{props.name}</h3>
          {/* <h2>{props.cuisine}</h2> */}
        </div>
      </div>
    )
  }
  
  export default MealCard