import PropTypes from 'prop-types';
const CheckOutItem = ({item}) => {
  console.log(item);
  return (
    <>
    <div className="flex flex-col md:flex-col justify-start items-start w-full pb-8 space-y-4 md:space-y-0">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img
          className="w-full h-32 md:h-48 object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>
      <div className="border-b border-gray-200 flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-xl font-semibold leading-6 text-gray-800">
            {item.title}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6">
            ${item.discountedPrice}{" "}
            <span className="text-red-300 line-through"> ${item.price}</span>
          </p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            {item.quantity}
          </p>
          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
            ${item.total}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
CheckOutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    total: PropTypes.number,
    discountPercentage: PropTypes.number,
    discountedPrice: PropTypes.number,
    thumbnail: PropTypes.string
  }).isRequired
};

export default CheckOutItem;

