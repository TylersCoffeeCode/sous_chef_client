import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-ctn">
            <div className='top-div'>
                <div className='search-ctn'>
                    <div className='search-box'>
                        <div className='search-icon'>
                            icon |
                        </div>
                        <div className='search-bar'>
                            Search For Recipes
                        </div>
                    </div>
                </div>
            </div>
            <div className='trending-div-title'>Trending Now 🔥</div>
            <div className='trending-div'>
                <div className='createCardDiv'>
                    <div className='createCard'>
                    <div className='addCardText'>
                        <h3>Create a Recipe</h3>
                        <h4>Easy to make</h4>
                        <h4>Share with everyone</h4>
                    </div>
                    <div className='addCardPlus'>
                        +
                    </div>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
            </div>
            <div className='categories'>
                <h4>Categories</h4>
            </div>
            <div className='categoryCardDiv'>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <div className='categoryCardText'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                    </div>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard