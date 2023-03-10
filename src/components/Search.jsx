import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Search = (props) => {


    return (
      <form onSubmit={props.onSubmit} className="search">
        <input
          type="text"
          name="search"
          value={props.value}
          placeholder="Search for recipes..."
          onChange={props.onChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    )
  }
  
  export default Search