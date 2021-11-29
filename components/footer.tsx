import React, { FunctionComponent } from "react";

const FooterComponent :  FunctionComponent<any> = (props) => {
  const nameRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const tableRef = React.useRef(null);
  const dateRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const [orderResult, setOrderResult] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(tableRef.current.value);
    console.log(dateRef.current.value);
    console.log(messageRef.current.value);
    fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        table: tableRef.current.value,
        date: dateRef.current.value,
        message: messageRef.current.value
      })
    })
    .then(res => res.json())
    .then(data => {
      setOrderResult(data);
    });
  };

  return (
    <>
      <section className="pt-12 pb-12 bg-red-50" id="order">
        <div className="container flex items-center justify-center p-6 mx-auto bg-white shadow-lg sm:p-12 md:w-1/2">
          <div className="w-full">
            <h1
              className="mb-4 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Order Now FREE AND FAST
            </h1>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="gap-2 mb-8 lg:flex">
                <div className="w-full">
                  <label className="block text-base">
                    Your Name
                  </label>
                  <input type="text"
                    ref={nameRef}
                    className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                    placeholder="Your Name" />
                </div>
                <div className="w-full">
                  <label className="block text-base">
                    Your Number
                  </label>
                  <input type="text"
                    ref={phoneRef}
                    className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                    placeholder="Your Number" />
                </div>
              </div>
              <div className="gap-2 mb-8 lg:flex">
                <div className="w-full">
                  <label className="block text-base">
                    Table Number
                  </label>
                  <input type="text"
                    ref={tableRef}
                    className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                    placeholder="Enter Table Number 1 to 12" />
                </div>
                <div className="w-full">
                  <label className="block text-base">
                    Booking Date
                  </label>
                  <input type="date"
                    ref={dateRef}
                    className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                    placeholder="Your Number" />
                </div>
              </div>
              <div className="">
                <label className="block text-base">
                  Your Message
                </label>
                <textarea
                  ref={messageRef}
                  rows={4}
                  cols={30}
                  className="box-border w-full text-base border p-3 rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="Message"></textarea>
              </div>
              <div className="w-full my-5 justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 mx-auto text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Place order result hear with format:
        OrderId: ?
        OrderName: ?
        OrderPhone: ?
        OrderStatus: ?
        OrderDate: ?
        OrderTable: ?
      */}
      { Object.values(orderResult).length && <section className="pt-12 pb-12 bg-red-50" id="order-result">
        <div className="container flex items-center justify-center p-6 mx-auto bg-white shadow-lg sm:p-12 md:w-1/2">
          <div className="w-full">
            { JSON.stringify(orderResult) }
          </div>
        </div>
      </section>}

      <footer className="bg-gray-800 border-t border-gray-200">
        <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4 text-white">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0">
            <a>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-6 h-6 text-blue-300" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                </path>
              </svg>
            </a>
            <a className="ml-3">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-6 h-6 text-pink-400" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="0" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
                <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent;