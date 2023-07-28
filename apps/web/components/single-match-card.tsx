import { CalendarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

type Props = {
    match: Match
}
type Match = {
    id: number,
    createdAt: string,
    updatedAt: string,
    court: string,
    player1Id?: number,
    player1?: any,
    player2?: any,
    player1Id_team1?: number,
    player2Id_team1?: number,
    player1Id_team2?: number,
    player2Id_team2?: number,
    player1_team1?: any,
    player2_team1?: any,
    player1_team2?: any,
    player2_team2?: any,
    player2Id?: number,
    score: string,
    seasonId: number,
}

function SingleMatchCard({match}: Props) {
    const score = JSON.parse(match.score as string)
    const sets = [score[1], score[2], score[3]]
    var Score1 = 0
    var Score2 = 0
    for (var set in sets) {
      if (Object.keys(sets[set]).length > 0) {
        if (sets[set].speler1 != 0 || sets[set].speler2 != 0) {
          if (sets[set].speler1 > sets[set].speler2) Score1++
          else Score2++
        }
      }
    }
  return (
  <div key={match.id} className='flex justify-between h-fit px-4 py-0 border border-slate-700 rounded-md'>
      <div className='flex flex-col lg:flex-row w-full items-start lg:items-center lg:space-x-4'>
          <Image src={match.player1.image} width={100} height={100} alt="Logo" className='rounded-[10px] max-w-[100px] aspect-square' />
          <p className='text-center font-bold'>{match.player1.name}</p>
          </div>
          <div className='flex flex-col w-full h-full mt-0 justify-center items-center lg:py-2'>
          <p className='text-center font-medium text-sm'>{match.court}</p>
          <p className='text-center font-bold text-4xl py-5 lg:py-3'>{Score1} - {Score2}</p>
          <p className='text-center font-medium space-x-4 flex items-center text-sm'><CalendarIcon className='w-3 h-3 mr-1 text-slate-700'/> {new Date(new Date(match.createdAt).toISOString()).toLocaleDateString('en-US')}</p>
          </div>
      <div className='flex flex-col lg:flex-row-reverse w-full items-end lg:items-center'>
          <Image src={match.player2.image} width={100} height={100} alt="Logo" className='rounded-[10px] max-w-[100px] aspect-square'  />
          <p className='text-center font-bold lg:mr-4'>{match.player2.name}</p>
          </div>
  </div>
  )
}

export default SingleMatchCard