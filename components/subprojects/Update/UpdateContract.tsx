import { Button } from '@/shadcn/ui/button'
import React from 'react'

const UpdateContract = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 justify-start items-center'>

                <form className='grid md:grid-cols-2 gap-4 my-6'>
                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract No </label>

                        <input

                            type="text"
                            className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>
                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Variation Cost </label>

                        <input

                            type="number"
                            className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>

                    <div className='col-span-1'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                            <option selected>Choose a type</option>
                            <option value="US">Grant</option>

                        </select>
                    </div>


                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Paid</label>

                        <input

                            type="number"
                            className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>



                    <div className='col-span-2'>
                        <label htmlFor="year-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated End Date </label>
                        <input
                            id=""
                            type="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"

                        />

                    </div>


                    <div className='col-span-2'>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">contract description</label>

                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 " placeholder="Write your thoughts here..."></textarea>

                    </div>










                    <div className='col-span-2'>
                        <Button className='w-full bg-green-600 text-white tracking-tight leading-tight' variant={"outline"}>Update Contract</Button>
                    </div>









                </form>

            </div>
        </div>
    )
}

export default UpdateContract
