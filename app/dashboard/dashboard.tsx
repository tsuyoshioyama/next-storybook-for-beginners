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
      <div className="flex justify-center">
        {/* chart  */}
        <div className="chart w-2/4">{<Chart data={chart.data} />}</div>

        {/* deposits */}
        <div className="deposit w-1/5 pl-10">{<Deposit data={deposit.data} />}</div>
      </div>
      <div>
        {/* recent orders */}
        <Order data={order.data} />
      </div>
    </div>
  );
}
