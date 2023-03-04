// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import '../App.css'

// const Comment = ({pcId}) => {
//   const cleanPost = {
//     Comment: '',
//     rating: '3',
//     name: '',
//   }

// const [post, setPost] = useState([])
// const [formValues, setFormValues] = useState(cleanPost)
// const [updatePost, setUpdatePost] = useState()
// const [commentId, setCommentId] = useState('')
// const [editing, setEditing] = useState(true)

// const getPosts = async () => {
//   try {
//     const res = await axios.get(`/api/pc/post/${pcId}`)
//     setPost(res.data)
//   } catch (err) {
//     console.log(err)
//     }
// }

// useEffect((e) => {
//   getPosts()
// },[])

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   try {
//     const createNewPost = {...formValues, pcId: pcId}
//     await axios.post(`/api/post`, createNewPost)
//     setFormValues(cleanPost)
//     getPosts()
//   } catch (error) {
//     console.log(error)
//   } 
// }

// const handleChange = (e) => {
//   setFormValues({...formValues, [e.target.name]: e.target.value})
// }

// const handleRemove = async (id) => {
//   await axios.delete(`/api/pc/post/${pcId}/${id}`)
//   getPosts()
// }

// const handleUpdate =  async (e) => {
//   e.preventDefault()
//   await axios.put(`/api/pc/post/${pcId}/${commentId}`, updatePost)
//   setEditing(true)
//   getPosts()
// }

// const handleEditState = (post) => {
//   setUpdatePost({ Comment: `${post.Comment}`, rating: `${post.rating}`, name: `${post.name}`})
//   setEditing(false)
//   setCommentId(post._id)
// }

// const updateHandleChange = (e) => {
//   setUpdatePost({...updatePost, [e.target.name]: e.target.value})
// }

// return (

// <div>
//   <div className="card">
//     <h1>{editing ? 'Add a': "Edit"} comment</h1>
//     { editing ? 
//     (
//       <form className="form"onSubmit={ handleSubmit }>
//         <input type="text" onChange={handleChange} value={formValues.name} name={"name"} id='name' placeholder={'Name'} />
//         <select name='rating' id="rating" value={formValues.rating} onChange={handleChange}>
//           <option value="1">Worst PC you could buy</option>
//           <option value="2">Could be Better</option>
//           <option selected value="3">Decent</option>
//           <option value="4">Better than most</option>
//           <option value="5">Best ever made</option>
//         </select>
//         <br/>
//         <textarea cols="40" rows="5" id='Comment' onChange={handleChange} value={formValues.Comment} name={"Comment"}  placeholder={'Comment'}></textarea>
//         <br/>
//         <button >Submit</button>
//       </form>
//     ): (
//       <form onSubmit={ handleUpdate }>
//         <input type="text" onChange={updateHandleChange} value={updatePost?.name} name={"name"} id='name' placeholder={'Name'} />
//         <select name='rating' id="rating" value={updatePost?.rating} onChange={updateHandleChange}>
//           <option value="1">Worst PC you could buy</option>
//           <option value="2">Could be Better</option>
//           <option selected value="3">Decent</option>
//           <option value="4">Better than most</option>
//           <option value="5">Best ever made</option>
//         </select>
//         <br/>
//         <textarea cols="40" rows="5" id='Comment' onChange={updateHandleChange} value={updatePost?.Comment} name={"Comment"}  placeholder={'Comment'}></textarea>
//         <br/>
//         <button >Edit</button>
//       </form>
//       )
//     }
//     {post?.post?.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post) => (
//       <div className='posts' key={post._id}>
//         <h3>Comment: {post.Comment}</h3>
//         <p>Rating: {post.rating}</p>
//         <p>Name: {post.name}</p>
//         <button onClick={() => handleRemove(post._id)}>remove</button>
//        {editing && <button onClick={() => handleEditState(post)}>Edit</button>}
//       </div> 
//       ))} 
//   </div>
// </div>
// )}

//   export default Comment