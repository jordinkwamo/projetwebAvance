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
     <Card src="/handball.jpg" titre="Les Faucons Éclairs" description=" Cette équipe de handball est réputée pour sa vitesse et son agilité sur le terrain. Leur jeu rapide et précis rappelle le vol rapide et agile d'un faucon."/>
      <Card src="/handball2.jpg" titre="Les Éclaireurs du Sud" description="Cette équipe se distingue par sa stratégie tactique et son intelligence de jeu. ."/>
      <Card src="/handball3.jpg" titre="Les Lames de Feu" description="Les Lames de Feu sont reconnues pour leur jeu flamboyant et spectaculaire. Leur style de jeu dynamique et incisif est comparé à des lames de feu qui dansent à travers l'air."/>
      <Card src="/handball5.jpg" titre="Les Ombres Mystiques" description="Cette équipe de handball est réputée pour son mystère et son imprévisibilité. "/>
     </div>
    </div>
  )
}

export default Event3