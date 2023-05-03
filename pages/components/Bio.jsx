import React from 'react'
import Image from 'next/image'

function Bio() {
  return (
    <>
      <div className='bio-container'>
        <div className="bio-block">
          <div className="image-block">
              <Image src='/images/avatar-dl.png' className='bio-img' height='180' width='180' />
              <p id='subtitle'>Vanderlei Moraes | Treinador</p>
          </div>
          <div className="text-block">
              <p>Minha história no mundo da musculação deu início em 2017. </p>
              <p>Treinar faz parte da minha rotina e se tornou minha filosofia de vida. Sempre fui apaixonado pelo assunto e acompanhava atletas dia após dia. Passava horas lendo livros da área, assistindo vídeos como entretenimento e foi aí que tudo começou.</p>
              <p>Da experiência de treino veio o amor pela profissão. Com toda essa trajetória me apaixonei pela Educação Física na área do Bodybuilding e decidi reunir todo meu conhecimento para evitar que você cometa os mesmos erros que eu.</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Bio
