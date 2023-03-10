import Nav from '../../components/Nav'
import './About.css'
import sous from '../../imgs/home/sousChef.png'

const About = ({ user, setUser }) => {
  return (
    <div className='about-page-ctn'>
      <Nav user={user} setUser={setUser} />
      <div className='about-page-left'>
        <img src={sous} alt="" />
      </div>

      <div className='about-page-right'>
        <h2>About Us</h2>
        <p>Welcome to <span className='orange'>Sous Chef</span>, the ultimate recipe-making webisite that puts the power in your hands. With <span className='orange'>Sous Chef</span>, you can catalogue all your favorite recipes, add your own unique creations, add other recipes from other users and easily access them whenever you need them. Our easy-to-use interface makes it simple to search for specific ingredients, cooking times, or dietary preferences.
          Whether you're a seasoned chef or just starting out, <span className='orange'>Sous Chef</span> makes it easy to plan your meals and take your cooking to the next level.
        </p>
        <p>At <span className='orange'>Sous Chef</span>, we believe that everyone can be a master chef with the right tools and resources. Check out our website today and start exploring new recipes and ideas that will help you unleash your inner chef!</p>
      </div>
    </div>
  )
}
export default About