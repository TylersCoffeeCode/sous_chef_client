import './Home.css'
import sous from '../../imgs/home/sousChef.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="home-ctn">
            <div className="home-left">
                <div className='home-left-header'>
                    <img src={sous} alt="" />
                </div>
                <div className='home-left-content'>
                    <div className='home-left-title'>
                        <h1>Welcome to <span>Sous Chef</span></h1>
                    </div>
                    <div className='home-left-text'>
                        <h2>Let's Get Cooking</h2>
                        <h3>The one stop shop for all your favorite recipes</h3>
                        <button onClick={() => navigate('/dashboard')}>Find Recipes</button>
                    </div>
                    <div className='home-left-imgs'>
                        <div className='img-card sandwich'></div>
                        <div className='img-card sandwich'></div>
                        <div className='img-card sandwich'></div>
                    </div>
                </div>
            </div>
            <div className="home-right">
            </div>
        </div>
    )
}
export default Home