"use client"
import { CalendarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import SingleMatchCard from './single-match-card'
import DoubleMatchCard from './double-match-card'

type Props = {
    matches: Match[]

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
function MatchList({matches}: Props) {
    const [matchType, setMatchType] = React.useState<string>("all");
    const [season, setSeason] = React.useState<string>("all");

    const router = useRouter();
  return (
    <div className='flex space-x-4 container py-6 h-[90vh]'>
    <div className='flex flex-col justify-between h-full space-y-3 border border-slate-700 rounded-md p-4 min-w-[350px] bg-slate-50'>
        <div className='flex flex-col space-y-3'>
        <p className='font-bold'>Type of Match</p>
        <Select value={matchType} onValueChange={setMatchType}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Match Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Matches</SelectItem>
    <SelectItem value="single">Single Match</SelectItem>
    <SelectItem value="doubles">Doubles Match</SelectItem>
  </SelectContent>
</Select>
<p className='font-bold'>Season</p>
        <Select value={season} onValueChange={setSeason}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Match Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Seasons</SelectItem>
    <SelectItem value="2022">Season 2022</SelectItem>
    <SelectItem value="2023">Season 2023</SelectItem>
  </SelectContent>
</Select>
</div>
<div className='flex flex-col space-y-3 border-t border-slate-300 p-3 pt-6 px-0'>
    <Button onClick={() => router.push("/matches/create/single")} variant='default' className='w-full'>Add Single Match</Button>
    <Button onClick={() => router.push("/matches/create/doubles")} variant='default' className='w-full'>Add Doubles Match</Button>
    </div>
        </div>
    <div className='flex flex-col space-y-3 max-h-[90vh] overflow-auto w-full mr-4 bg-slate-50'>
        {matches.map(match => {
            if(match.player1 && match.player2) return (<SingleMatchCard match={match} key={match.id}/>)
            else{
                return <DoubleMatchCard match={match} key={match.id}/>
            }
        })}
    </div>
    </div>
  )
}

export default MatchList