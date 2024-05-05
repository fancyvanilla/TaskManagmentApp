import React from 'react'

const Search = () => {
  return (
        <div className="input-group search p-4">
        <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
        <button className="btn btn-primary py-0" type="button">
        <i className="bi bi-search"></i>
        </button></div>
  )
}

export default Search