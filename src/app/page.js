'use client'
import Image from 'next/image'
import styles from './home.module.css'
import Template from '@/components/templatepage/Template'

export default function Home() {
  return (
    < >
      <Template
					title="Football"
					description="Venez vivre l'excitation et l'adrénaline d'un match de football
           en direct lors de notre événement !
           Rejoignez-nous pour une expérience sportive inoubliable, avec des joueurs talentueux,
           des buts spectaculaires et une ambiance électrique. Que vous soyez un fan de longue date ou que vous découvriez le football,
           cet événement est fait pour vous. Apportez votre énergie et votre passion et préparez-vous à encourager votre équipe préférée.
           On se voit sur le terrain ! ⚽️🙌"
					textButton1="voir plus"
					textButton2="reserver"
					srcImg="/foot.jpg"
					altImg="artiste"
				/>

<Template
					title="Basket Ball"
					description="Préparez-vous à vivre l'intensité et l'action palpitante d'un match de basketball
           lors de notre événement ! Rejoignez-nous pour une soirée de dunks incroyables,
           de tirs à trois points et de compétition féroce. Que vous soyez un fan de longue date ou que vous découvriez le basketball,
           cet événement est fait pour vous. Venez soutenir notre équipe locale, ressentez l'énergie de la foule et profitez d'une expérience
           sportive inoubliable. Ne manquez pas cette occasion de voir les meilleurs joueurs en action.
           On se voit sur le terrain ! 🏀🔥"
					textButton1="voir plus"
					textButton2="reserver"
					srcImg="/dunk.jpg"
					altImg="artiste"
				/>

<Template
					title="Handball"
					description="Prépare-toi à vivre l'intensité et la vitesse du handball
           lors de notre événement ! Rejoins-nous pour une soirée de passes
           précises, de tirs puissants et de défenses solides. Que tu sois un fan de longue
           date ou que tu découvres le handball, cet événement est fait pour toi. Viens soutenir notre équipe locale,
           ressens l'énergie de la foule et profite d'une expérience sportive palpitante. Ne manque pas
           cette occasion de voir les meilleurs joueurs en action.
           On se voit sur le terrain ! 🤾‍♂️🔥"
					textButton1="voir plus"
					textButton2="reserver"
					srcImg="/volley.jpg"
					altImg="artiste"
				/>

<Template
					title="Volley Ball"
					description="Prépare-toi à plonger, à smasher et à servir lors de notre événement
           de volley-ball ! Rejoins-nous pour une journée remplie de passes précises,
           de blocs puissants et de points spectaculaires. Que tu sois un fan de longue date ou que tu
           découvres le volley-ball, cet événement est fait pour toi. Viens soutenir notre équipe locale, 
           ressens l'énergie de la foule et profite d'une expérience sportive incroyable. Ne manque pas cette occasion de
           voir les meilleurs joueurs en action.
           On se voit sur le terrain ! 🏐🔥"
					textButton1="voir plus"
					textButton2="reserver"
					srcImg="/volley.jpg"
					altImg="artiste"
				/>
    </>
  )
}
