import React from 'react';

const Footer = () => {
  return (
    <div>

      <footer aria-label="Site Footer" className="bg-gradient-to-r from-[#686562] to-[#444553] text-white mt-[-50px]">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong
              className="block text-center text-xl font-medium text-white sm:text-3xl"
            >
              Want us to email you with the latest blockbuster Products?
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email"> Email </label>

                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="Your Email "
                />

                <button
                  className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-green-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>



          <div className="mt-16 border-t border-gray-100 pt-8">
            <div className="text-center text-xs leading-relaxed text-white">
              © Nayem || All rights reserved.

              <br />

              Created with
              <p
                className="text-white underline transition hover:text-gray-700/75"
              >REACT JS</p>
              by
              <a className='text-white underline transition hover:text-gray-700/75' href="https://github.com/Nayem12">Nayem12</a>

            </div>
          </div>
        </div>
      </footer >
    </div >

  );
};

export default Footer;