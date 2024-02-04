/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event2 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/fondecran.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
     <Card src="/equipe A basketball.jpg" titre="RMA" description="Best" />
      <Card src="/equipe B basketball.jpg" titre="FCB" description="Worst" />
      <Card src="/equipe C basketball.jpg" titre="SEV" description="Better" />
      <Card src="/equipe C basketball.jpg" titre="ATM" description="Cheat" />
     </div>
    </div>
  )
}

export default Event2