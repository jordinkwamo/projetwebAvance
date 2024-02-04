/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from './page.module.css'
import Card from '@/components/card/Card'

const Event1 = () => {
  return (
    <div>
      <img className={Styles.imgcont} src='/foot.jpg'></img>
      <h2 className={Styles.h2}>Equipes Participantes</h2>

     <div className={Styles.cardcont}>
      <Card src="/foot.jpg" titre="RMA" description="Best" />
      <Card src="/foot.jpg" titre="FCB" description="Worst" />
      <Card src="/foot.jpg" titre="SEV" description="Better" />
      <Card src="/foot.jpg" titre="ATM" description="Cheat" />
     </div>
    </div>
  )
}

export default Event1