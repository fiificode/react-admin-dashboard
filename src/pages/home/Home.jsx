import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { Userdata } from '../../dummyData'
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={Userdata} title="User Analytics" grid dataKey="ActiveUser"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
