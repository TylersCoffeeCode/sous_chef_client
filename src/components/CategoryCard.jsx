
import { useEffect, useState } from 'react'
import Client from '../services/api'


const CategoryCard = (props) => {


  const author = props.createdby
  const [userName, setUserName] = useState('')

  const GetUser = async (data) => {
    try {
      const res = await Client.get(`/users/get/${author}`, data)
      setUserName(res.data.username)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    GetUser()
  }, [author])


  return (
    <div className='categoryCard' onClick={props.onClick}>
      <div className="categoryCardImg">
        <img src={props.picture} alt="" />
      </div>
      <div className='categoryCardText'>
        <p className='cuisine'>{props.cuisine}</p>
        <p className='cuisine blue'>{props.diet_type}</p>
        <h3>{props.name}</h3>
        <p>By: {userName}</p>
      </div>
    </div>
  )
}
export default CategoryCard