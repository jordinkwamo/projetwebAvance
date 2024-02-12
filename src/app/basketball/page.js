import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event2 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/fondecrancard.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
     <Card src="/equipe A basketball.jpg" titre="GALAXY" description="Une équipe de basket-ball qui brille comme des étoiles, avec des joueurs talentueux et spectaculaires."/>
      <Card src="/equipe b basketball.jpg" titre="AIGLES" description="Une équipe de basket-ball puissante et féroce, prête à attaquer et à défendre avec agilité."/>
      <Card src="/equipe c basketball.jpg" titre="MENOUE" description="Une équipe de basket-ball qui domine chaque mois, avec des performances constantes."/>
      <Card src="/last.jpg" titre="WASHINGTON" description="Une équipe de basket-ball qui incarne la fierté de la capitale, avec des joueurs déterminés."/>
     </div>
    </div>
  )
}

export default Event2