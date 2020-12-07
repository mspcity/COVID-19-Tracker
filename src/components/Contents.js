import { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios'

const Contents = () => {

  const [confirmedData, setConfirmedData] = useState({
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { 
        label: "국내 누적 확진자",
        backgroundColor: "salmon",
        fill: true,
        data: [10, 5, 3]
      }
    ]
  })

  useEffect(() => {
    const fetchEvents = async () => {
        const res = await axios.get("https://api.covid19api.com/total/dayone/country/US")
        console.log(res)
    }
    fetchEvents()
  })
  return (
    <section>
       <h2>COVID-19 Cases</h2>
       <div className="contents">
          <div>
            <Bar data={confirmedData} options={
              { title: { display: true, text: "누적 확진자 추이", fontSize: 16}},
              { legend: { display: true, position: "bottom"}}
            } />
          </div>
       </div>
     </section>
  )
}

export default Contents
