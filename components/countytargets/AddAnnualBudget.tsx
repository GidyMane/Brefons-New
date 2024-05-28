import { Button } from '@/shadcn/ui/button';
import React, { ChangeEvent, useState } from 'react'

const AddAnnualBudget = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
        const year = parseInt(event.target.value);
        if (!isNaN(year)) {
            setSelectedYear(year);
        }
    };



    return (
        <div className='flex flex-col gap-4 justify-start items-center'>

            <form className='grid md:grid-cols-2 gap-4 my-6'>


                <div>
                    <label htmlFor="year-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Year: </label>
                    <input
                        id="year-input"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"

                        value={selectedYear}
                        onChange={handleYearChange}
                        min="2016"
                        max="2024"
                    />

                </div>

                <div>

                    <label htmlFor="dependent-year-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dependent Year: </label>

                    <input
                        id="dependent-year-input"
                        type="number"
                        className="bg-gray-50 border read-only:bg-green-600 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        value={selectedYear + 1 > 2025 ? 2025 : selectedYear + 1}
                        readOnly
                    />
                </div>


                <div className='col-span-1'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Sub Component</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 ">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>


                <div>

                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code </label>

                    <input
                        
                        type="number"
                        className="bg-gray-50 border disabled:bg-green-300 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        disabled
                    
                    />
                </div>

                <div className='col-span-2'>

                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Activity </label>

                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 " placeholder="Write your thoughts here..."></textarea>

                </div>

                <div className='col-span-2'>

                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount budgetted </label>

                    <input
                        
                        type="number"
                        className="bg-gray-50 border  text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        
                    
                    />
                </div>


                <div className='col-span-2'>
                    <Button className='w-full bg-green-600 text-white tracking-tight leading-tight' variant={"outline"}>Add Budget</Button>
                </div>









            </form>

        </div>
    )
}

export default AddAnnualBudget
