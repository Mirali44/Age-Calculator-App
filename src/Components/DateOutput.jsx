function DateOutput({showDate}) {

    const date = new Date()
    const d = date.getDate()
    const m = date.getMonth()+1
    const y = date.getFullYear()

    let years = y - showDate[2]
    let months = m - showDate[1]
    console.log(months)
    
    if(months<0){
      months = (m-showDate[1])+12
      years = (y-showDate[2])-1
    }
    let days = d - showDate[0]
    if(days<0){
      days = (d - showDate[0])+31
      months = (m - showDate[1])-1
    }
    if(days<0 || months<0){
      days = (d - showDate[0])+31
      months = (m - showDate[1])+12
      years = (y-showDate[2])-1
    }

    return ( 
          <div className="outputs">
      <span className='x'><span className="years">{years? years : '--' }</span>years</span>
      <span className='x'><span className="months">{months? months : '--'}</span>months</span>
      <span className='y'><span className="days">{days? days : '--'}</span>days</span>
    </div>
     );
}

export default DateOutput;