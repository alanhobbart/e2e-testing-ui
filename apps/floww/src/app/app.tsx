import { CardProps, Header } from '@test/ui';
import { useState } from 'react';
import Stats from './stats/stats';
import TrafficInfo from './traffic-info/traffic-info';
export function App() {
  
  let traffic = { data: {
    statSubtitle:"Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-green-500",
  }};

  const [trafficData, setTrafficData] = useState<CardProps>(traffic);
  
  return (
    <>
    <div className="min-h-full">
        <div>test change</div>
        <Header title="Dashboard" backgroundColor="bg-cyan-600"></Header>
       
        <main>
        <div className="flex flex-wrap overflow-hidden lg:-mx-px justify-center">
          
          <div className="w-3/4 overflow-hidden lg:my-px pt-10 lg:px-px ml-60">
          <TrafficInfo info={trafficData} onReload={() => {
            setTrafficData({
              ...traffic,
              data: {
                ...traffic.data,
                statTitle: '100'
              }
            });
          }}/>
          </div>

          <div className="w-3/4 overflow-hidden">
            <Stats/>
          </div>
        </div>
          
        </main>
      </div>
      <div>
      </div>
    </>
  );

}

export default App;
