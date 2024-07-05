import Chart from './chart';
import Deposit from './deposit';
import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div className="mx-auto grid w-3/4 pl-6 pr-6">
      <div className="grid grid-cols-2">
        {/* chart  */}
        <div className="col-xs-12 col-md-8 col-lg-9 col-start-1 col-end-3 pl-6 pt-6">{<Chart data={chart.data} />}</div>

        {/* deposits */}
        <div className="col-xs-12 col-md-4 col-lg-3 col-start-3 col-end-4 pl-6 pt-6">
          {<Deposit data={deposit.data} />}
        </div>
      </div>
      {/* orders */}
      <div className="col-xs-12 pl-6 pt-6"> {<Order data={order.data} />} </div>
    </div>
  );
}
