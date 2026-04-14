'use client'
import React from 'react'
import Link from 'next/link'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function page() {
  const router = useRouter()
  return (
    <section className=" grid grid-cols-2 mx-auto w-full max-w-[1600px] h-[800px] px-4 sm:px-6 lg:px-8  mt-10">
        <div className="flex flex-col  rounded-3xl top-50 relative h-[300px] mt-10 ml-20">
            <Image src="/img/About_Logo.png" 
            alt="Signup Hero" 
            width={1000} 
            height={1000}
            className=""
            />
        </div>
        <div className="flex flex-col rounded-3xl top-50 relative mt-10 mr-30">
            
        <div className="rounded-[20px] relative top-50 right-0 w-[100%] ml-10 bg-[#ffffff] p-5 sm:p-7 lg:col-span-6  ">
          <h2 className="text-[2.95rem] font-semibold text-[#000000] mb-10 pb-10">
           Login to your<span className="text-[#4C9A2A]"> account </span>
          </h2>
          <p className="mt-2 text-sm text-[#6F6F6F] ">
          Welcome back! Please enter your details.
          </p>

          <form className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-xl border border-transparent bg-[#E2E2E2] px-4 text-sm outline-none placeholder:text-[#000000]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="password"
              placeholder="Password"
              className="h-12 w-full rounded-xl border border-transparent bg-[#E9EBE6] px-4 text-sm outline-none placeholder:text-[#9D9D9D]"
            />

            </div>

            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Login
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#76BA1B]">
                <ArrowIcon className="text-black" />
              </span>
            </button>
            <p className="text-sm text-[#6F6F6F]">
            Don't have a Shopify account? 
            <Link href="/signup" className="text-[#76BA1B]">Sign up</Link>
            </p>
          </form>
        </div>
        </div>
    </section>  
  )
}

export default page