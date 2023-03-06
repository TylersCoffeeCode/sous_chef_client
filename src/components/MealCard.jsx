import '../pages/dashboard/Dashboard.css'


const MealCard = (props) => {

    return (
      <div className="trendingFoodCard" onClick={props.onClick}>
        <div className="trendingFoodCardImg">
          <img src={props.picture} alt="meal-picture" />
        </div>
        <div className="trendingFoodCardText">
          <h5>{props.name}</h5>
          <p>By: </p>
          {/* <h2>{props.cuisine}</h2> */}
        </div>
      </div>
    )
  }
  
  export default MealCard