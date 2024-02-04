import React from 'react'
import Image from 'next/image'
import styles from './template.module.css'
const Template = ({title = "Titre",
description = "Description",
textButton1,
textButton2,
srcImg,
altImg}) => {
  return (
    <div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttons}>
					<button className={styles.button}>{textButton1}</button>
					<button className={styles.button}> {textButton2}</button>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src={srcImg} alt={altImg} fill />
			</div>
		</div>
  )
}

export default Template