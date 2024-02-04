/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event1 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/acueil.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
      <Card src="/chelsea.jpg" titre="Chelsea" description="Club de foot de Londres, Angleterre, connu pour son jeu offensif et succès en Premier League." />
      <Card src="/fcb.jpg" titre="FC Barcelona" description="Club de foot de Barcelone, Espagne, célèbre pour son style de jeu attrayant et succès en Liga." />
      <Card src="/usa.jpg" titre="Usa" description="Équipe nationale de foot des États-Unis, a atteint les quarts de finale de la Coupe du Monde 2002." />
      <Card src="/brasil.jpg" titre="Brasil" description="Équipe nationale de foot brésilienne, célèbre pour son jeu flamboyant et 5 titres de la Coupe du Monde.
" />
     </div>
    </div>
  )
}

export default Event1