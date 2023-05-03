import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { CgGym } from 'react-icons/cg'

function Links() {
  return (
    <div className='links'>
        <a href="https://wa.me/24981236824" className='link' target="_blank" rel="noreferrer">
            <CgGym className='small-icon' />
            <span>FAÇA PARTE DO TIME | CONSULTORIA</span>
        </a>
        <a href="https://www.youtube.com/channel/UCEz26k3gcRbSirXZlVg7KuA" className='link' target="_blank" rel="noreferrer">
            <BsYoutube className='small-icon' /> 
            <span>ACESSE MEU CONTEÚDO | YOUTUBE</span>
        </a>
    </div>
  )
}

export default Links
