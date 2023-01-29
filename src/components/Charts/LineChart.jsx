import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,LineSeries,Legend,Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxix } from '../../data/dummy'

const LineChart = () => {
  return (
 <ChartComponent 
 tooltip={{enable:true}}
 height='400px'
 >
 <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
 <SeriesCollectionDirective>
  {lineCustomSeries.map((item,index) =>
  <SeriesDirective key={index} {...item} /> )}
 </SeriesCollectionDirective>
 </ChartComponent>
  )
}

export default LineChart
