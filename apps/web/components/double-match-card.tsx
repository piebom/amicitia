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

function DoubleMatchCard({match}: Props) {
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
  <div key={match.id} className='flex justify-between h-fit px-4 py-2 border border-slate-700 rounded-md'>
      <div className='flex flex-col w-full items-start justify-between'>
        <div className='flex space-x-5 h-full'>
        <Image src={match.player1_team1.image} width={90} height={90} alt="Logo" className='rounded-[10px] h-[90px] aspect-square' />
        <Image src={match.player2_team1.image} width={90} height={90} alt="Logo" className='rounded-[10px] h-[90px] aspect-square' />
        </div>
          <p className='text-center font-bold truncate'>{match.player1_team1.name} & {match.player2_team1.name}</p>
          </div>
          <div className='flex flex-col w-full h-full mt-0 justify-center items-center lg:py-2'>
          <p className='text-center font-medium text-sm'>{match.court}</p>
          <p className='text-center font-bold text-4xl py-5 lg:py-3'>{Score1} - {Score2}</p>
          <p className='text-center font-medium space-x-4 flex items-center text-sm'><CalendarIcon className='w-3 h-3 mr-1 text-slate-700'/> {new Date(new Date(match.createdAt).toISOString()).toLocaleDateString('en-US')}</p>
          </div>
      <div className='flex flex-col  w-full items-end '>
      <div className='flex space-x-5 h-full'>
        <Image src={match.player1_team2.image} width={90} height={90} alt="Logo" className='rounded-[10px] h-[90px] aspect-square' />
        <Image src={match.player2_team2.image} width={90} height={90} alt="Logo" className='rounded-[10px] h-[90px] aspect-square' />
        </div>
          <p className='text-center font-bold truncate'>{match.player1_team2.name} & {match.player2_team2.name}</p>
          </div>
  </div>
  )
}

export default DoubleMatchCard