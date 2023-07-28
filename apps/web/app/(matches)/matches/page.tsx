import MatchList from '@web/components/match-list'
import axios, { all } from 'axios'
import React from 'react'

type Props = {}

async function getMatches() {
    try{
        const matches = await axios.get('http://localhost:4000/matches').then(res => res.data)
        return matches
    } catch (error) {
        console.log(error)
    }

}

async function getDoulbesMatches() {
    try{
        const matches = await axios.get('http://localhost:4000/doublematches').then(res => res.data)
        return matches
    } catch (error) {
        console.log(error)
    }
}


async function MatchesPage({}: Props) {
    const matches = await getMatches()
    const doubleMatches = await getDoulbesMatches()
    const allMatches = [...matches, ...doubleMatches]
    allMatches.sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })
  return (
    <MatchList matches={allMatches}/>
  )
}

export default MatchesPage