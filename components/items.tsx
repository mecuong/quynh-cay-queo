import { FunctionComponent } from "react";
import ItemComponent from "./item";

interface ItemsComponentProps {
  title?: string;
  mark?: string;
  data: any[];
}

const ItemsComponent :  FunctionComponent<ItemsComponentProps> = (props) => {
  return (
    <section className="mt-8 bg-white" id="our-menu">
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-bold">{ props.title }</h3>
        { props.mark && <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{ props.mark }</h2> }
      </div>
      <div className="container w-full px-5 py-6 mx-auto">
        <div className="grid lg:grid-cols-4 gap-y-6">
          {props.data.map((item: any, index: number) => (
            <ItemComponent key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}


export default ItemsComponent;