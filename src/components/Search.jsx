import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='search user'/>
      </div>
      <div className='userChat'>
        <img src='https://tinyurl.com/user-saitama' alt='' />
        <div className='userChatInfo'>
          <span>Saitama</span>
        </div>
      </div>
    </div>
  )
}

export default Search