import './App.css'
import { useState } from 'react'
import DateInput from './Components/DateInput'
import DateOutput from './Components/DateOutput'
function App() {
  const [date, setDate] = useState([])
  const givenDate=(day,month,year)=>{
    const dates=[
      
        day,
        month,
        year
      
    ]
    setDate(dates) 
  }
 return(
  <div className="container">
    <DateInput addDate={givenDate}/>
    <DateOutput showDate={date} />
  </div>
 )

  
}

export default App
