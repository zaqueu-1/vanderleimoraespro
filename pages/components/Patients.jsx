import React from 'react'
import Image from 'next/image'

function Patients() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className='patients-container'>
        <Image className='patients' src='/images/02.jpg' width='300' height='300' />
        <Image className='patients' src='/images/03.jpg' width='300' height='300' />
        <Image className='patients' src='/images/04.jpg' width='300' height='300' />
        <Image className='patients' src='/images/05.jpg' width='300' height='300' />
      </div>
    </div>
  )
}

export default Patients
