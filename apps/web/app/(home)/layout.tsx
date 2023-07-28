import MainNav from "@web/components/main-nav"
import { Button } from "@web/components/ui/button";
import { UserAccountNav } from "@web/components/user-account-nav";
import { getCurrentUser } from "@web/lib/session"
import Link from "next/link"
import { notFound } from "next/navigation";


interface HomelayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({
  children,
}: HomelayoutProps) {
    const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-[64px] z-40 bg-white/50 border-b ">
        <div className="flex h-full container items-center justify-between bg-transparent">
          <MainNav/>
          {user ? (
            <div className="flex items-center space-x-4">
                
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
            </div>
        ) : (
            <div className="flex items-center space-x-4">
            <Button variant="secondary" className="w-full truncate">
                <Link href="/login">Login</Link>
            </Button>
            </div>
        )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}