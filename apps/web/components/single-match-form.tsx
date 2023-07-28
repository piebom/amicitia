"use client"
import { singleMatchSchema } from '@web/lib/validations/singlematch'
import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@web/lib/utils"
import { userAuthSchema } from "@web/lib/validations/auth"
import { buttonVariants } from "@web/components/ui/button"
import { Input } from "@web/components/ui/input"
import { Label } from "@web/components/ui/label"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import axios from 'axios'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@web/components/ui/select"
import { User } from 'next-auth'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { error } from 'console'

type Props = {
    token: string
    allUsers: allUser[]
    user: User
}
type allUser = {
    id: number,
    name: string,
}
type FormData = z.infer<typeof singleMatchSchema>
function SingleMatchForm({allUsers, token,user}: Props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<FormData>({
        defaultValues: {
            player1Id: user.id.toString(),
            player2Id: allUsers.filter((e) => {
                return e.id !== parseInt(user.id)
            }
            )[0].id.toString(),
            set1Player1: "0",
            set1Player2: "0",
            set2Player1: "0",
            set2Player2: "0",
            set3Player1: "0",
            set3Player2: "0",
            
        },
        resolver: zodResolver(singleMatchSchema),
      })
      const router = useRouter()
      const [isLoading, setIsLoading] = React.useState<boolean>(false)
      async function onSubmit(data: FormData) {
        setIsLoading(true)

        const singleMatch = {
            player1Id: parseInt(data.player1Id),
            player2Id: parseInt(data.player2Id),
            score: JSON.stringify({
                1: {
                    speler1: data.set1Player1,
                    speler2: data.set1Player2
                },
                2: {
                    speler1: data.set2Player1,
                    speler2: data.set2Player2
                },
                3: {
                    speler1: data.set3Player1,
                    speler2: data.set3Player2
                }
            })
            ,
            seasonId: 1,
            court: "Gravel"
        }

    
        const result = await axios.post("http://localhost:4000/match", singleMatch, {
            headers: {
                Authorization: `Bearer ${token}`,
                },
                })
    
        if (result?.status === 201) {
          router.push("/matches")
        }
    
        setIsLoading(false)
    
      }
  return (
    <Card className={"grid gap-6 w-[450px]"}>
        <CardHeader className='pb-0'>
            <CardTitle>Add Single Match</CardTitle>
        </CardHeader>
        <CardContent>
      <form            
        
     onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">
              Player 1
            </Label>
            <Select onValueChange={(e) => setValue("player1Id",e)} defaultValue={allUsers.find((e) => {
                return e.id === parseInt(user.id)
            })?.id.toString() || "1" }>
    <SelectTrigger className="w-full">
        <SelectValue placeholder="Player 1" />
    </SelectTrigger>
    <SelectContent>
        {allUsers.map(user => {
            return (
                <SelectItem key={user.id} value={user.id.toString()}>{user.name}</SelectItem>
            )
        }
        )}
            </SelectContent>

            </Select>
            {errors?.player1Id && (
              <p className="px-1 text-xs text-red-600">
                {errors.player1Id.message}
              </p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">
              Player 2
            </Label>
            <Select onValueChange={(e) => setValue("player2Id",e)} defaultValue={allUsers.find((e) => {
                return e.id === parseInt(user.id)
            })?.id.toString() || "1" }>
    <SelectTrigger className="w-full">
        <SelectValue placeholder="Player 1" />
    </SelectTrigger>
    <SelectContent>
        {allUsers.map(user => {
            return (
                <SelectItem key={user.id} value={user.id.toString()}>{user.name}</SelectItem>
            )
        }
        )}
            </SelectContent>

            </Select>
            {errors?.player2Id && (
              <p className="px-1 text-xs text-red-600">
                {errors.player2Id.message}
              </p>
            )}
          </div>
          <div className="pb-5 grid grid-cols-4 gap-y-1 lg:gap-y-3 gap-x-3 lg:gap-x-5 justify-center text-center items-center grid-rows-3">
        <p></p>
        <h1 className="text-lg font-bold">Set 1</h1>
        <h1 className="text-lg font-bold">Set 2</h1>
        <h1 className="text-lg font-bold">Set 3</h1>
        <h1 className="text-lg font-bold">Player 1</h1>
                    <Label className="sr-only" htmlFor="set1Player1">
                    set1Player1
            </Label>
            <Input
              id="set1Player1"
              placeholder=""
              type="number"
              autoCapitalize="none"
              autoCorrect="off"
              onChange={(e) => setValue("set1Player1",e.target.value)}
            />


                    <Label className="sr-only" htmlFor="set2Player1">
                    set2Player1
            </Label>
            
            <Input

                id="set2Player1"
                placeholder=""
                type="number"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setValue("set2Player1",e.target.value)}
            />

                    <Label className="sr-only" htmlFor="set3Player1">
                    set3Player1
            </Label>
            <Input

                id="set3Player1"
                placeholder=""
                type="number"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setValue("set3Player1",e.target.value)}
            />

        <h1 className="text-lg font-bold">Player 2</h1>
                    <Label className="sr-only" htmlFor="set1Player2">
                    set1Player2
            </Label>
            <Input

                id="set1Player2"
                placeholder=""
                type="number"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setValue("set1Player2",e.target.value)}
            />

                    <Label className="sr-only" htmlFor="set2Player2">
                    set2Player2
            </Label>
            <Input

                id="set2Player2"
                placeholder=""

                type="number"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setValue("set2Player2",e.target.value)}
            />

                
                    <Label className="sr-only" htmlFor="set3Player2">
                    set3Player2
            </Label>
            <Input
                
                id="set3Player2"
                placeholder=""
                type="number"
                autoCapitalize="none"
                autoCorrect="off"
                onChange={(e) => setValue("set3Player2",e.target.value)}
            />
            
      </div>
          <button onClick={() => console.log(errors)} type='submit' className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
           Create Singles Match
          </button>
        </div>
      </form>
        </CardContent>
    </Card>
  )
}

export default SingleMatchForm