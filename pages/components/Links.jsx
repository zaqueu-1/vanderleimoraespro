import React from 'react'
import Image from 'next/image'

function Links() {
  return (
    <div className='links'>
        <a href="https://wa.me/24981236824" className='link' target="_blank" rel="noreferrer">
          <Image className='img' src='/images/10.png' width='505' height='205' />
        </a>

        <a href="https://www.youtube.com/channel/UCEz26k3gcRbSirXZlVg7KuA" className='link' target="_blank" rel="noreferrer">
        <Image className='img' src='/images/17.png' width='505' height='205' />
        </a>
    </div>
  )
}

export default Links
