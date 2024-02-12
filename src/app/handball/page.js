/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event3 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/handball.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
     <Card src="/handball.jpg" titre="Les Faucons " description="Les yeux perçants du ciel, prêts à repérer l'ennemi de loin."/>
      <Card src="/handball2.jpg" titre="Les Éclaireurs" description="Les explorateurs intrépides, ouvrant la voie vers l'inconnu."/>
      <Card src="/handball3.jpg" titre="Les Lames " description="Les maîtres de l'art de l'élimination, rapides et précis."/>
      <Card src="/handball5.jpg" titre="Les Ombres " description="Les mystérieux, se fondant  accomplir leurs missions secrètes."/>
     </div>
    </div>
  )
}

export default Event3