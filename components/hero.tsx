import { FunctionComponent } from "react";

const HeroComponent :  FunctionComponent<{}> = (props) => {
  return (
    <div
    className="container max-w-lg px-4 py-32 mx-auto text-left bg-center bg-no-repeat bg-cover md:max-w-none md:text-center"
    style={{ backgroundImage: "url('/image/hero.jpeg')" }}
    >
    <h1
      className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 md:text-center sm:leading-none lg:text-5xl">
      <span className="inline md:block">Nhà tôi 3 đời nấu phở</span>
    </h1>
    <div className="mx-auto mt-2 text-green-50 md:text-center lg:text-lg">
      Nhưng đến đời tôi thì đi làm HR và hiện tôi đang học code
    </div>
    <div className="flex flex-col items-center mt-12 text-center">
      <span className="relative inline-flex w-full md:w-auto" />
        <a href="#_" type="button"
          className="inline-flex items-center max-w-md justify-center px-6 py-2 text-base font-bold leading-6 text-white bg-green-600 rounded-full lg:w-full md:w-auto hover:bg-green-500 focus:outline-none">
          Buy Now
        </a>
    </div>
  </div>
  )
}

export default HeroComponent;