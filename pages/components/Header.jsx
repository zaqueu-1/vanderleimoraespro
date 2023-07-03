import React from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'

function Header() {
  return (
    <div className='header'>
        <div className="verified-link">
            <MdVerified className='verified-icon'/>
            <span className='verified'>Link Verificado</span>
        </div>
        <Image src='/images/logopic.jpeg' className='avatar' height='200' width='200' />
        <h1>Vanderlei Moraes</h1>
        <p>CONSULTORIA ESPORTIVA</p>
        <p id='cref'>CREF Responsável 018367-G/RJ</p>
    </div>
  )
}

export default Header
