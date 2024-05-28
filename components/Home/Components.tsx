import React from 'react'
import { Tabs } from '../Aceternity/tabs'
import OutCome1 from './OutCome1'
import OutCome2 from './OutCome2'
import OutCome3 from './OutCome3'
import OutCome4 from './OutCome4'


const tabs = [
    {
        title: "Component 1",
        value: "irrigation",
        content: <OutCome1/>
    },
    {
        title: "Component 2",
        value: "component 2",
        content: <OutCome2/>
    },
    {
        title: "Component 3",
        value: "component 3",
        content: <OutCome3/>
    },
    {
        title: "Component 4",
        value: "component 4",
        content: <OutCome4/>
    }
    
]

const Components = () => {
    return (
        <div className='w-full'>
            <Tabs tabs={tabs}  contentClassName='pt-20'  containerClassName='dark:text-gray-800 bg-transparent backdrop-blur-lg fixed z-[100]'/>
        </div>
    )
}

export default Components