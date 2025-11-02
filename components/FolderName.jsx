import React from 'react'
import Folder from './Folder'
function FolderName({name}) {
  return (
    <div className='flex flex-col justify-center items-center' style={{zIndex:999}}>
        <Folder size={0.5} color="#FF5B57" className="custom-folder " />
        <h3 className='font-kollektif font-bold tracking-wide text-lg text-white/80'>{name}</h3>
    </div>
  )
}

export default FolderName