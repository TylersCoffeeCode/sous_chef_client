import Nav from '../../components/Nav'
import './Favorites.css'

const Favorites = () => {
  return (
    <div className="fav-ctn">
      <Nav />
      <div className='favorite-div'>
        <div className='favorite-div-title'>
          Favorites
        </div>
        <div className='favorite-div-card-ctn'>
        </div>
      </div>
    </div>
  )
}
export default Favorites