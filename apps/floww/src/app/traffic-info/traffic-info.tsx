import { Card, CardProps } from '@test/ui';

export type TrafficInfoProps = {
  info: CardProps;
  onReload: () => void;
};

export function TrafficInfo({ info, onReload}: TrafficInfoProps) {
  
  return (
    <div className="bg-blueGray-100">
      <div className="flex flex-wrap">
        <div className="px-4">
            <Card data={info.data}/>
        </div>
        <div className="px-4">
            <Card data={info.data}/>
        </div>
        <div className="px-4">
            <Card data={{ ...info.data, statIconColor: 'bg-red-500'}}/>
        </div>
        <div className="px-4">
            <Card data={{ ...info.data, statIconColor: 'bg-orange-500'}}/>
        </div>
      </div>
      <input type="button" value="Refresh" onClick={onReload}/>
    </div>
  );
}

export default TrafficInfo;
