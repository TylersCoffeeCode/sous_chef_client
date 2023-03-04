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

            <div className='addCardDiv'>
                <div className='addCard'>
                    <div className='addCardPlus'>
                        Plus
                    </div>
                    <div className='addCardText'>
                        Text
                    </div>
                </div>
            </div>
            <div className='trending-div-title'>Trending Now 🔥</div>

            <div className='trending-div'>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
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
                <div className='categoryCard'>Bigger Food Card</div>
                <div className='categoryCard'>Bigger Food Card</div>
                <div className='categoryCard'>Bigger Food Card</div>
                <div className='categoryCard'>Bigger Food Card</div>
                <div className='categoryCard'>Bigger Food Card</div>
                <div className='categoryCard'>Bigger Food Card</div>

            </div>
        </div>
    )
}
export default Dashboard