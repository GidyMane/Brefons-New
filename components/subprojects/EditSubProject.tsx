import { Button } from '@/shadcn/ui/button'
import React from 'react'

const EditSubProject = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 justify-start items-center'>

                <form className='grid md:grid-cols-2 gap-4 my-6'>
                    <div className='col-span-1'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select County</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                            <option selected>Choose a county</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>



                    <div>
                        <label htmlFor="year-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID </label>
                        <input
                            id=""
                            type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"

                        />

                    </div>

                    <div className='col-span-1'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                            <option selected>Choose a category</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>


                    <div className='col-span-1'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select sub category</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                            <option selected>Choose a sub category</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>






                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract name </label>

                        <input

                            type="text"
                            className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>
                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract amount </label>

                        <input

                            type="number"
                            className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>

                    <div className='col-span-2'>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">contract description</label>

                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 " placeholder="Write your thoughts here..."></textarea>

                    </div>

                    <div className='col-span-2'>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date </label>

                        <input

                            type="date"
                            className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>
                    <div className=''>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Female Estimate </label>

                        <input

                            type="text"
                            className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>
                    <div className=''>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude </label>

                        <input

                            type="text"
                            className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>
                    <div className=''>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude </label>

                        <input

                            type="text"
                            className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>

                    <div className=''>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Male Estimate </label>

                        <input

                            type="text"
                            className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"


                        />
                    </div>


                    <div className='col-span-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select status</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                            <option selected>Choose a status</option>
                            <option value="US">stalled</option>
                            <option value="CA">cancelled</option>

                        </select>
                    </div>


                    <div className='col-span-2'>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remarks</label>

                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 " placeholder="Write your thoughts here..."></textarea>

                    </div>



                    <div className='col-span-2'>
                        <Button className='w-full bg-green-600 text-white tracking-tight leading-tight' variant={"outline"}>Update Contract Register</Button>
                    </div>









                </form>

            </div>
        </div>
    )
}

export default EditSubProject
