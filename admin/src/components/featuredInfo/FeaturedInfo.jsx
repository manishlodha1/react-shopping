import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../../requestMethods'

const FeaturedInfo = () => {
    const [income , setIncome] = useState([]);
    const [perc , setPerc] = useState(0);


    useEffect(()=>{
        const getIncome = async () =>{
            try{
                const res = await userRequest.get("orders/income");
                console.log("income == ", res.data);
                setIncome(res.data);
                setPerc((res.data[1].total*100)/res.data[0].total - 100);
            }
            catch(err){
                console.log("error ==" ,err);
            }
        };
        getIncome();
    },[]);
    // console.log(income); 
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs {income[1]?.total}</span>
                <span className="featuredMoneyRate">
                    {Math.floor(perc)}%{" "}
                    {perc < 0 ? (
                     <ArrowDownward className='featuredIcon negative' />
                    ) : (
                     <ArrowUpward className='featuredIcon' />
                    )}
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs 4415</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs 2225</span>
                <span className="featuredMoneyRate">
                    +2.4 <ArrowUpward className='featuredIcon' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo