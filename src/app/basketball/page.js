/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event2 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/fondecrancard.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
     <Card src="/equipe A basketball.jpg" titre="GALAXY DENVER" description=" Galaxy denver est une équipe de basketball reconnue pour leur jeu aérien et leur agilité sur le terrain."/>
      <Card src="/equipe b basketball.jpg" titre="AIGLES ROYAL" description="Aigles royal est une équipe de basketball redoutable connue pour leur force physique et leur détermination"/>
      <Card src="/equipe c basketball.jpg" titre="TAM DE MENOUE" description="Tam de menoue est une équipe de basketball célèbre pour leur vitesse éclair et leur précision chirurgicale."/>
      <Card src="/last.jpg" titre="WASHINGTON" description="WASHINGTON est une équipe de basketball redoutée pour leur défense impénétrable et leur domination physique sous le panier."/>
     </div>
    </div>
  )
}

export default Event2