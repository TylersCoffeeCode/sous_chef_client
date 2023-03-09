


const CategoryCard = (props) => {
    return (
            <div className='categoryCard' onClick={props.onClick}>
                <div className="categoryCardImg">
                    <img src={props.picture} alt="" />
                </div>
                <div className='categoryCardText'>
                    <p className='cuisine'>{props.cuisine}</p>
                    <p className='cuisine'>{props.diet_type}</p>
                    <h3>{props.name}</h3>
                    <p>By:</p>
                </div>
            </div>
    )
}
export default CategoryCard