import React from 'react'

const Footer = () => {
  let footerStyle={
    position:'relative',
    top:'10vh',
    width:'100%',
    border: '2px solid red'
  };
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; TodoList.com
      </p>
    </footer>

  )
}

export default Footer

