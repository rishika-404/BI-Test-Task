import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/sidebar'
import Cards from '../components/bargraphs'
import BarGraph from '../components/bargraph'
import SymptomsBox from '../components/sym'
import LiveUpdate from '../components/liveupdate'
const Dashboard = () => {
    const API_URL = "https://data.covid19india.org/v4/min/data.min.json";

    const [stateData, setStateData] = useState(null);


    const fetchData = async () => {
        try {
            const { data } = await axios(API_URL);

            setStateData(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])



    return (
        <div className='flex justify-between'>
            <Sidebar />
            <div className='flex flex-col justify-between'>
                <div className="flex flex-col lg:flex-row justify-start items-center gap-6 mt-14 ml-36">
                    <div className="h-40 w-full lg:w-1/3  rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
                        <Cards
                            color={"rgb(13, 157, 197)"}
                            title={"Cases"}
                            percentage={"23%"}
                        />
                    </div>
                    <div className="h-40 w-full lg:w-1/3 rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
                        <Cards
                            color={"rgb(239 68 68)"}
                            title={"Death"}
                            percentage={"19%"}
                        />
                    </div>
                    <div className="h-40 w-full lg:w-1/3  rounded-2xl overflow-hidden shadow-md shadow-zinc-200">
                        <Cards
                            color={"rgb(101 163 13)"}
                            title={"Recovered"}
                            percentage={"15%"}
                        />
                    </div>
                </div>
                <div className='mb-16'>
                    <BarGraph />
                </div>
                
            </div>

            <div className='flex flex-col gap-10 mt-14 mr-16'>
                <div className='bg-gray-200 rounded-lg p-3 '>
                    <p>Live Update</p>
                    <LiveUpdate/>
                </div>
                <div className='mb-10'>
                    {<SymptomsBox />}

                </div>
            </div>


        </div>
    )
}

export default Dashboard