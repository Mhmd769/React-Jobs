import React from 'react'

import  ClipLoader  from 'react-spinners/ClipLoader'

const overide={
    display:'block',
    margin:'100px auto'
}

const spinners = ({loading}) => {
  return (
    <ClipLoader

    color='#4338ca'
    loading={ loading }
    cssOverride={overide}
    size={150}
    />
  )
}

export default spinners