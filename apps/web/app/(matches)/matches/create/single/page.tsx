import SingleMatchForm from '@web/components/single-match-form'
import { authOptions } from '@web/lib/auth'
import { getCurrentUser } from '@web/lib/session'
import axios, { all } from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'

type Props = {}

async function getAllUsers(token: string) {
    try{
        const users = await axios.get('http://localhost:4000/user/all',{
            headers: {
                Authorization: `Bearer ${token}`,
                },
        }).then(res => res.data)
        return users
    } catch (error) {
        console.log(error)
    }
}

async function SinglePage({}: Props) {
    const session = await getServerSession(authOptions);
    const allUsers = await getAllUsers(session?.access_token as string)

  return (
    <div className='h-[calc(100vh-64px)] flex w-full items-center justify-center'>
        <SingleMatchForm user={session?.user!} allUsers={allUsers} token={session?.access_token as string}/>
    </div>
  )
}

export default SinglePage