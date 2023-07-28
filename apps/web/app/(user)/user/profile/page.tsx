import { Card, CardContent, CardHeader } from '@web/components/ui/card'
import Image from 'next/image'
import React from 'react'

type Props = {}

function ProfilePage({}: Props) {
  return (
    <div className='w-screen justify-evenly relative h-[calc(100vh-64px)] flex flex-col items-center'>
      <div className='bg-[#242534] h-[70%] w-screen flex items-center justify-between relative'>
        <div className='px-[10%] w-screen flex justify-between'>
        <div className='flex flex-col items-start justify-center text-white w-full'>
        <Image src="/belgium.png" width={512} height={512} alt="Logo" className='h-[35px] w-[45px] mb-6' />
        <h1 className='text-2xl font-semidbold'>Pieter</h1>
        <p className='text-6xl font-bold'>Bommele</p>
        <p className='text-md font-medium pt-4'>Lokeren, Belgium</p>
      </div>
      <Image src="/PieterSmall.png" width={542} height={1080} alt="Logo" className='w-[45vh] translate-y-28 z-20' />
      <div className='flex flex-col items-end justify-center text-white w-full'>
        <Card className='w-[70%]'>
          <CardHeader>
            Last Match
          </CardHeader>
          <CardContent>
            <div className='flex justify-between'>
              <Image src="https://amecitiaapi.onrender.com/pieterbommele.jpg" width={512} height={512} alt="Logo" className='h-[100px] w-[100px] rounded-full' />
              <div className='flex flex-col items-center justify-center font-bold text-2xl text-black w-full'>
                2 - 1
                </div>
                <Image src="https://amecitiaapi.onrender.com/pieterbommele.jpg" width={512} height={512} alt="Logo" className='h-[100px] w-[100px] rounded-full' />

              </div>
          </CardContent>
        </Card>
      </div>
        </div>
      </div>
      <div className='bg-slate-100 h-[40%] w-screen flex items-center justify-start relative z-30'>
</div>
      {/* <Image src="/pieterbig.png" width={542} height={1080} alt="Logo" className='w-[45vh] absolute bottom-0 z-20' /> */}
      <div className='absolute border border-slate-600 h-[70%] animate-pulse animate- aspect-square rounded-full'></div>
    </div>
  )
}

export default ProfilePage