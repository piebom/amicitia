"use client"
import { cn } from '@web/lib/utils'
import { NavItem } from '@web/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

type Props = {}

const items = [
    {
        title: "Matches",
        href: "/matches",
    },
    {
        title: "Ranking",
        href: "/ranking",
    },
] as NavItem[]

function MainNav({}: Props) {
    const segment = useSelectedLayoutSegment()
  return (
    <div className='w-screen h-[64px] bg-transparent flex items-center'>
        <Link href={"/"} className='flex items-center'>
        <Image src={"/Logo.png"} width={512} height={512} alt="Logo" className='h-[35px] w-[35px]' />
        <p className='ml-3 text-xl font-bold text-primary'>Amicitia</p>
        </Link>
        <nav className="hidden gap-6 md:flex ml-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
    </div>
  )
}

export default MainNav