import moment from "moment";
import Currency from "react-currency-formatter";

const Order = ({ id, amount, timestamp, images, items }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 bg-gray-100 text-sm p-5 text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="INR" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end text-right flex-1 text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 truncate w-40 lg:w-72 text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} className="h-20 object-contain sm:h-32" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
