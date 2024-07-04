import Order from './order';
import Chart from './chart';
import Deposit from './deposit';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div>
      <div className="grid">
        <div className="flex">
          {/* chart  */}
          <div className="chart md:8 lg:9">{<Chart data={chart.data} />}</div>

          {/* deposits */}
          <div className="deposit md:4 lg:3 pl-10">{<Deposit data={deposit.data} />}</div>
        </div>
        {/* orders */}
        <div className="order xs:12 mt-10"> {<Order data={order.data} />} </div>
      </div>
    </div>
  );
}
