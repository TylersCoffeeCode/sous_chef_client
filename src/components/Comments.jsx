import axios from 'axios'
import { useState, useEffect } from 'react'
import '../App.css'

const Comment = ({mealId}) => {
  const cleanPost = {
    Comment: '',
    name: '',
  }

const [post, setPost] = useState([])
const [formValues, setFormValues] = useState(cleanPost)
const [updatePost, setUpdatePost] = useState()
const [commentId, setCommentId] = useState('')
const [editing, setEditing] = useState(true)
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

const getPosts = async () => {
  try {
    const res = await axios.get(`/comments/${mealId}`)
    setPost(res.data)
  } catch (err) {
    console.log(err)
    }
}

useEffect((e) => {
  getPosts()
},[])

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const createNewPost = {...formValues, mealId: mealId}
    await axios.post(`/comments`, createNewPost)
    setFormValues(cleanPost)
    getPosts()
  } catch (error) {
    console.log(error)
  } 
}

const handleChange = (e) => {
  setFormValues({...formValues, [e.target.name]: e.target.value})
}

const handleRemove = async (id) => {
  await axios.delete(`/comments/${meal_id}/${id}`)
  getPosts()
}

const handleUpdate =  async (e) => {
  e.preventDefault()
  await axios.put(`/comments/${meal_id}/${commentId}`, updatePost)
  setEditing(true)
  getPosts()
}

const handleEditState = (post) => {
  setUpdatePost({ Comment: `${post.Comment}`, rating: `${post.rating}`, name: `${post.name}`})
  setEditing(false)
  setCommentId(post._id)
}

const updateHandleChange = (e) => {
  setUpdatePost({...updatePost, [e.target.name]: e.target.value})
}

return (

<div>
  <div className="card">
    <h1>{editing ? 'Add a': "Edit"} comment</h1>
    { editing ? 
    (
      <form className="form"onSubmit={ handleSubmit }>
        <input type="text" onChange={handleChange} value={formValues.name} name={"name"} id='name' placeholder={'Name'} />
        <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button name='rating' id="rating" type="button" value={updatePost?.rating} key={index} className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
        <br/>
        <textarea cols="40" rows="5" id='Comment' onChange={handleChange} value={formValues.Comment} name={"Comment"}  placeholder={'Comment'}></textarea>
        <br/>
        <button >Submit</button>
      </form>
    ): (
      <form onSubmit={ handleUpdate }>
        <input type="text" onChange={updateHandleChange} value={updatePost?.name} name={"name"} id='name' placeholder={'Name'} />
        <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button name='rating' id="rating" type="button" value={updatePost?.rating} key={index} className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
        <br/>
        <textarea cols="40" rows="5" id='Comment' onChange={updateHandleChange} value={updatePost?.Comment} name={"Comment"}  placeholder={'Comment'}></textarea>
        <br/>
        <button >Edit</button>
      </form>
      )
    }
    {post?.post?.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post) => (
      <div className='posts' key={post._id}>
        <h3>Comment: {post.Comment}</h3>
        <p>Rating: {post.rating}</p>
        <p>Name: {post.name}</p>
        <button onClick={() => handleRemove(post._id)}>remove</button>
       {editing && <button onClick={() => handleEditState(post)}>Edit</button>}
      </div> 
      ))} 
  </div>
</div>
)}

  export default Comment