import Link from 'next/link'
import Layout from '../components/Layout'
import HeroComponent from '../components/hero';
import menu from '../data/items.json';
import ItemsComponent from '../components/items';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HeroComponent />
     <section className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-2 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-4 sm:max-w-md lg:max-w-lg lg:space-y-4 lg:pr-0 md:pb-0">
              <h3 className="text-xl">OUR STORY
              </h3>
              <h2 className="text-4xl text-green-600">Welcome</h2>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo incidunt praesentium, ipsum
                culpa minus eveniet, id nesciunt excepturi sit voluptate repudiandae. Explicabo, incidunt quia.
                Repellendus mollitia quaerat est voluptas!
              </p>
              <div className="relative flex">
                <a href="#_"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-600 rounded-md sm:mb-0 hover:bg-green-700 sm:w-auto">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="https://cdn.pixabay.com/photo/2017/08/03/13/30/people-2576336_960_720.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50" id="about">
      <div className="container items-center max-w-6xl px-2 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="mb-4 text-2xl font-bold">About Us</h2>
              <h2
                className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                WHY CHOOSE US?</h2>

              <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Natus hic atque magni minus aliquam, eos quam incidunt nam iusto sunt voluptates
                inventore a veritatis doloremque corrupti. Veritatis est expedita cupiditate!</p>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                    </path>
                  </svg>
                  <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-gray-500">Easy Payments</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                    </path>
                  </svg>
                  <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img
              className="mx-auto sm:max-w-sm lg:max-w-full"
              src="https://cdn.pixabay.com/photo/2020/12/31/12/28/cook-5876388_960_720.png" alt="feature image" /></div>
        </div>
      </div>
    </section>
    <ItemsComponent title="Our Menu" mark="Đã lắm" data={menu} />
    <section className="pt-4 pb-12 bg-gray-50" id="gallery">
      <div className="my-8 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Food Gallery</h2>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta sapient</p>
      </div>
      <div className="container grid gap-4 mx-auto lg:grid-cols-3">
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2013/07/12/19/20/sushi-154590__340.png" alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2015/08/20/19/18/market-897990__340.jpg" alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706__340.jpg" alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2016/02/19/11/30/pizza-1209748_960_720.jpg" alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020__340.jpg" alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245__340.jpg" alt="image" />
        </div>
      </div>
    </section>

    <section className="pt-4 pb-12 bg-gray-800">
      <div className="my-16 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Testimonial </h2>
        <p className="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta sapient</p>
      </div>
      <div className="grid gap-2 lg:grid-cols-3">
        <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Food</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt
              ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur
              minus consequuntur!</p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-green-500">John Doe</a>
          </div>
        </div>
        <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Food</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt
              ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur
              minus consequuntur!</p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-green-500">John Doe</a>
          </div>
        </div>
        <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Food</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt
              ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur
              minus consequuntur!</p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-green-500">John Doe</a>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
