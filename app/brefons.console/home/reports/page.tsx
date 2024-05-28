import InfoSection from '@/components/DashBoard/InfoSection'
import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const revalidate = 0;
const page = async() => {
  const supabase = createServerComponentClient({ cookies });
  const { data: session } = await supabase.auth.getSession();
    if (!session?.session) {
    redirect("/Login");
  }
  return (
    <div className='w-full'>
          <div className='flex items-center justify-center mt-4 text-gray-900'>Reports page Coming Soon</div>

    </div>
  )
}

export default page