import { CheckIcon } from '@heroicons/react/24/solid'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardHeader } from '@web/components/ui/card'
import Image from 'next/image'
import React from 'react'

type Props = {}

function ProfilePage({}: Props) {
  return (
    <div className='w-screen justify-evenly relative h-fit flex flex-col items-center'>
      <div className='bg-[#242534] min-h-[500px] w-screen flex items-center justify-between sticky top-[64px]'>
        <div className='container h-full w-screen flex justify-between'>
        <div className='flex flex-col items-start justify-center text-white w-full'>
        <Image src="/belgium.png" width={512} height={512} alt="Logo" className='h-[35px] w-[45px] mb-6' />
        <h1 className='text-2xl font-semidbold'>Pieter</h1>
        <p className='text-6xl font-bold'>Bommele</p>
        <p className='text-md font-medium pt-4'>Lokeren, Belgium</p>
      </div>
      <div className='flex items-end justify-center h-full w-[100%] relative'>
      <Image src="/PieterSmall.png" width={542} height={1080} alt="Logo" className='w-[80%] -top-32 absolute z-30' />
      <div className='absolute border border-slate-600 h-[700px] -top-10 animate-pulse animate- aspect-square rounded-full'></div>

      </div>
      <div className='flex flex-col items-end justify-center text-white w-full z-10'>
        <Card className='w-fit bg-slate-200/20 border-slate-700 border'>
          <CardHeader className='pb-3 text-left text-white font-bold'>
            Recent Form
          </CardHeader>
          <CardContent>
            <div className='flex space-x-2 justify-start'>
              <div className='bg-green-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>W</p></div>
              <div className='bg-green-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>W</p></div>
              <div className='bg-red-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>L</p></div>
              <div className='bg-green-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>W</p></div>
              <div className='bg-red-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>L</p></div>
              <div className='bg-red-500 rounded-full h-[30px] w-[30px] flex items-center justify-center'><p className='text-white font-bold text-sm'>L</p></div>
              
            </div>
          </CardContent>
        </Card>
      </div>
        </div>
      </div>
      <div className='bg-slate-100 h-[calc(100vh-64px)] w-screen flex items-start justify-start  relative z-30 text-black'>
        <div className="container py-12 h-full">
        <p className='font-bold text-4xl'>STATISTICS</p>
        <div className="flex flex-col py-6 h-full">
        <div className='flex space-x-6 pt-10'>
        <Card className='w-[250px] h-[150px] shadow-lg'>
          <CardContent className='h-full p-6'>
            <div className='flex flex-col justify-between h-full'>
              <p className='text-xl font-semibold'>Servespeed</p>
              <p className='text-3xl font-bold text-right'>147 km/h</p>
              </div>
          </CardContent>
        </Card>
        <Card className='w-[250px] h-[150px] shadow-lg'>
          <CardContent className='h-full p-6'>
            <div className='flex flex-col justify-between h-full'>
              <p className='text-xl font-semibold'>Matches</p>
              <p className='text-3xl font-bold text-right'>120</p>
              </div>
          </CardContent>
        </Card>
        <Card className='w-[250px] h-[150px] shadow-lg'>
          <CardContent className='h-full p-6'>
            <div className='flex flex-col justify-between h-full'>
              <p className='text-xl font-semibold'>Wins</p>
              <p className='text-3xl font-bold text-right'>46</p>
              </div>
          </CardContent>
        </Card>
        <Card className='w-[250px] h-[150px] shadow-lg'>
          <CardContent className='h-full p-6'>
            <div className='flex flex-col justify-between h-full'>
              <p className='text-xl font-semibold'>Loses</p>
              <p className='text-3xl font-bold text-right'>74</p>
              </div>
          </CardContent>
        </Card>
        </div>
        <div className='flex space-x-6 pt-20 h-full'>
        <Card className='w-full min-h-full shadow-lg'>
          <CardContent className='h-full p-0'>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex justify-between w-[350px] h-full bg-slate-100 rounded-[10px] border-slate-200 py-5 px-3 border-r'>
                  <div className='flex items-center px-3 justify-start w-full h-[50px] rounded-[10px] bg-[#242534]/90 hover:cursor-pointer hover:bg-[#242534]/80'>
                      <Image src="https://amecitiaapi.onrender.com/pieterbommele.jpg" width={512} height={512} alt="Logo" className='h-[35px] w-[35px] rounded-[10px]' />
                      <p className='font-semibold ml-5 text-white'>Pieter Bommele</p>
                    </div>
                </div>
              </div>
          </CardContent>
        </Card>
        </div>
        </div>
        </div>
</div>
      {/* <Image src="/pieterbig.png" width={542} height={1080} alt="Logo" className='w-[45vh] absolute bottom-0 z-20' /> */}    </div>
  )
}

export default ProfilePage