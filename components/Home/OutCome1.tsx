import React from 'react'
import Image from "next/image";
import BarChart from "@/components/DashBoardCharts/BarChart";
import LineChart from "@/components/DashBoardCharts/Linechart";
import StackedBarChart from "@/components/DashBoardCharts/stackedchart";
import RadarChart from "@/components/DashBoardCharts/GroupedBarChart";
import GroupedBarChart from "@/components/DashBoardCharts/GroupedBarChart";
import CropProductivityChart from "@/components/DashBoardCharts/CropProductivity";
import LivestockProductivityCards from "@/components/DashBoardCharts/livestock";
import LivestockProductivityChart from "@/components/DashBoardCharts/livestock";




const OutCome1 = () => {
    return (
        <div className='pb-16'>
            <div className="md:grid md:grid-cols-1 flex flex-col gap-4">
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTCOME STATEMENT 1: Increased Resilience of Agropastoral Production Systems </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTCOME INDICATOR 1.1: Agricultural productivity Crops</p>

                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/water.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">500 Tons/Ha</p>
                            <h3 className="font-semibold text-balance w-full">Maize</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/dam.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">789 Tons/Ha</p>
                            <h3 className="font-semibold">Banana</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">230 Tons/Ha</p>
                            <h3 className="font-semibold">Cow pea</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/dam.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">165 Tons/Ha</p>
                            <h3 className="font-semibold">Sorghum</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">450 Tons/Ha</p>
                            <h3 className="font-semibold">Water Melon</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">980 Tons/Ha</p>
                            <h3 className="font-semibold">Tomato</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300  col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">678 Tons/Ha</p>
                            <h3 className="font-semibold">Fodder</h3>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[450px] w-full shrink-0">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Crops Productivity</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <CropProductivityChart />
                    </div>
                </div> */}

            </div>

            <div className="md:grid md:grid-cols-1 mt-6 flex flex-col gap-4">
                <div className="bg-white shadow-md p-4 rounded-md col-span-2 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTCOME STATEMENT 1: Increased Resilience of Agropastoral Production Systems </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTCOME INDICATOR 1.1b: Agricultural productivity (Livestock)</p>

                    <div className="md:grid md:grid-cols-1 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        {/* Livestock Productivity Cards */}
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">2000 Litres/year</p>
                            <h3 className="font-semibold">Milk (Cow)</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">1500 Litres/year</p>
                            <h3 className="font-semibold">Milk (Goat)</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">1200 Litres/year</p>
                            <h3 className="font-semibold">Milk (Camel)</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">300 Tons/Ha</p>
                            <h3 className="font-semibold">Camel Meat</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">250 Tons/Ha</p>
                            <h3 className="font-semibold">Goat Meat (Chevon)</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300  col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">400 Tons/Ha</p>
                            <h3 className="font-semibold">Honey</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300  col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock" />
                            </div>
                            <p className="text-sm text-gray-900">350 Tons/Ha</p>
                            <h3 className="font-semibold">Beef</h3>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[450px] w-full shrink-0">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Livestock</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <LivestockProductivityChart />
                    </div>
                </div> */}

            </div>


            <div className="md:grid md:grid-cols-1 mt-6 flex flex-col gap-4">

                <div className="bg-white shadow-md p-4 rounded-md col-span-2 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT INDICATOR 1.1.1 Water infrastructure developed</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Summary</p>

                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1  w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/water.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">25 / <span className="text-green-600 font-bold">30</span></p>

                            <h3 className="font-semibold text-balance w-full">Water Pans</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/dam.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">25 / <span className="text-green-600 font-bold">30</span></p>

                            <h3 className="font-semibold">Earth Dams</h3>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">25 / <span className="text-green-600 font-bold">30</span></p>
                            <h3 className="font-semibold">Boreholes</h3>

                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/dam.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">25 / <span className="text-green-600 font-bold">30</span></p>
                            <h3 className="font-semibold">Surface Dams</h3>

                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300  col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/borehole.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">25 / <span className="text-green-600 font-bold">30</span></p>
                            <h3 className="font-semibold">Shallow Wells</h3>

                        </div>
                    </div>
                </div>

                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[450px] w-full shrink-0">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Water Mobilization</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <BarChart />
                    </div>
                </div> */}
            </div>

            <div className="md:grid md:grid-cols-1 mt-6 flex flex-col gap-4">

                <div className="bg-white shadow-md p-4 rounded-md col-span-2 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Sustainable Management of Agropastoral Land. </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Summary</p>

                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1  w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/agri.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">1240 / <span className="text-green-600 font-bold">5000</span></p>
                            <h3 className="font-semibold text-balance w-full ">Agriculture and Pastoral Land under Sustainable Management</h3>

                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/farmer.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">2556 / <span className="text-green-600 font-bold">5000</span></p>
                            <h3 className="font-semibold">Farmers and pastoralists with access to innovative technologies and practices</h3>

                        </div>

                    </div>
                </div>

                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[400px] w-full shrink-0">

                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Sustainable Management of Agropastoral Land. </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <LineChart />
                    </div>
                </div> */}


            </div>
            <div className="md:grid md:grid-cols-1 mt-6 flex flex-col gap-4">

                <div className="bg-white shadow-md p-4 rounded-md col-span-2 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT INDICATOR 1.1.3: Rangeland/Pasture development/rehabilitation</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Summary</p>

                    <div className="md:grid md:grid-cols-1 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1  w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/irr.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">245 / <span className="text-green-600 font-bold">800</span></p>
                            <h3 className="font-semibold text-balance w-full ">Irrigation</h3>

                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/pasture.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">454 / <span className="text-green-600 font-bold">840</span></p>
                            <h3 className="font-semibold">Pastures</h3>

                        </div>
                        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2  flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/range.png"} className="shrink-0" width={20} height={20} alt="water pan" />
                            </div>
                            <p className="text-sm text-gray-900">453 / <span className="text-green-600 font-bold">5000</span></p>
                            <h3 className="font-semibold">Rangelands</h3>

                        </div>

                    </div>
                </div>

                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[400px] w-full shrink-0">

                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Area of Irrigated lands</h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <StackedBarChart />
                    </div>
                </div> */}


            </div>
            <div className="md:grid md:grid-cols-1 mt-6 flex flex-col gap-4">

                <div className="bg-white shadow-md p-4 rounded-md col-span-2 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT INDICATOR 1.1.4: Animal feed, health, and market access infrastructure constructed/rehabilitated </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Summary</p>

                    <div className="md:grid md:grid-cols-1 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                        {/* Health and Market Access Infrastructure Constructed/Rehabilitated */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/health.png"} className="shrink-0" width={20} height={20} alt="health infrastructure" />
                            </div>
                            <p className="text-sm text-gray-900">3 / <span className="text-green-600 font-bold">21</span></p>
                            <h3 className="font-semibold text-balance w-full ">Health and Market Access Infrastructure Constructed/Rehabilitated</h3>
                        </div>
                        {/* Hay Stores/Sheds Constructed */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/hay.png"} className="shrink-0" width={20} height={20} alt="hay stores" />
                            </div>
                            <p className="text-sm text-gray-900">2 / <span className="text-green-600 font-bold">7</span></p>
                            <h3 className="font-semibold">Hay stores/sheds constructed</h3>
                        </div>
                        {/* Veterinary Laboratories Equipped */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/vet.png"} className="shrink-0" width={20} height={20} alt="veterinary labs" />
                            </div>
                            <p className="text-sm text-gray-900">1 / <span className="text-green-600 font-bold">2</span></p>
                            <h3 className="font-semibold">Veterinary Laboratories Equipped</h3>
                        </div>
                        {/* Livestock Sale Yards/Markets Constructed */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/livestock.png"} className="shrink-0" width={20} height={20} alt="livestock markets" />
                            </div>
                            <p className="text-sm text-gray-900">3 / <span className="text-green-600 font-bold">12</span></p>
                            <h3 className="font-semibold">Livestock Sale Yards/markets Constructed</h3>
                        </div>
                        {/* Access Roads Constructed */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/road.png"} className="shrink-0" width={20} height={20} alt="access roads" />
                            </div>
                            <p className="text-sm text-gray-900">10 Kms</p>
                            <h3 className="font-semibold">Access roads constructed</h3>
                        </div>
                        {/* Access Roads Rehabilitated */}
                        <div className="bg-green col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                            <div className="rounded-full p-3 bg-gray-100">
                                <Image src={"/road.png"} className="shrink-0" width={20} height={20} alt="access roads" />
                            </div>
                            <p className="text-sm text-gray-900">5 Kms</p>
                            <h3 className="font-semibold">Access roads rehabilitated</h3>
                        </div>
                    </div>
                </div>


                {/* <div className="col-span-2 shadow-md bg-white/75 p-4 rounded-md h-[400px] w-full shrink-0">

                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">Animal Feed, Health and Market Access Infrastructures </h2>

                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Overview</p>

                    <div className="h-[300px]">
                        <GroupedBarChart />
                    </div>
                </div> */}


            </div>    </div>
    )
}

export default OutCome1
