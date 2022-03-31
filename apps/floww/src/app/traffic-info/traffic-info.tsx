import { data } from 'autoprefixer';
import { Card, CardProps } from '@test/ui';

export function TrafficInfo({ data }: CardProps) {
  
  return (
    <div className="bg-blueGray-100">
      <div className="flex flex-wrap">
        <div className="px-4">
            <Card data={data}/>
        </div>
        <div className="px-4">
            <Card data={data}/>
        </div>
        <div className="px-4">
            <Card data={{ ...data, statIconColor: 'bg-red-500'}}/>
        </div>
        <div className="px-4">
            <Card data={{ ...data, statIconColor: 'bg-orange-500'}}/>
        </div>
      </div>
    </div>
  );
}

export default TrafficInfo;
