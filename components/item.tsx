import { FunctionComponent } from "react";

interface ItemComponentProps {
  title: string;
  image: string;
  excerpt: string;
  price: string | number | null;
  category: string;
}

const ItemComponent :  FunctionComponent<ItemComponentProps> = (props) => {
  return (
      <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
        <img className="w-full h-48" src={props.image} alt={props.title} />
        <div className="px-6 py-4">
          <div className="flex mb-2">
            <span className="px-4 py-0.5 text-sm bg-red-500 rounded-full text-red-50">{ props.category }</span>
          </div>
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{ props.title }</h4>
          <p className="leading-normal text-gray-700">{ props.excerpt }</p>
        </div>
        <div className="flex items-center justify-between p-4">
          <button className="px-4 py-2 bg-green-600 text-green-50">Order Now</button>
          <span className="text-xl text-green-600">{ props.price }</span>
        </div>
      </div>
  )
}

export default ItemComponent;