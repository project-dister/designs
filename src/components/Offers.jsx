// import React from "react";
// import "./Offers.scss";

// export default function Offers() {
//   return (
//     <section className="offers">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Repeated card component */}
//         {Array(8)
//           .fill()
//           .map((_, index) => (
//             <div className="" key={index}>
//               <div className="container">
//                 <div className="card">
//                   {/* Image container */}
//                   <div className="imgBx">
//                     <img
//                       className="image"
//                       src="https://images.nightcafe.studio/jobs/cUAIt5CTS9sQgkglwshb/cUAIt5CTS9sQgkglwshb.jpg?tr=w-1600,c-at_max"
//                     />
//                   </div>
//                   {/* Short title */}
//                   <h2 className="short-title">Fullstack nextjs13...</h2>
//                   {/* Expanded content */}
//                   <div className="contentBx">
//                     <h2>Fullstack nextjs13 web application on dapp</h2>

//                     {/* Popup container */}
//                     <div className="popup-container">
//                       <p className="starts-at">starts at</p>

//                       {/* Price and delivery time */}
//                       <div className="info-container">
//                         <div className="price">
//                           <p>
//                             <i className="fa-solid fa-dollar-sign"></i> 100
//                           </p>
//                         </div>

//                         <div className="delivery-time">
//                           <p>
//                             <i className="fa-solid fa-truck-fast"></i> 2 days
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Author */}
//                   <div className="author">SatoshiNakamoto</div>
//                   {/* Rating */}
//                   <div className="rating">
//                     <i className="fa-solid fa-star orange-text"></i> 4.5
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// }











import React from "react";
import "./Offers.scss";

export default function Offers() {
  return (
    <section className="offers">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 md:px-6">
        {/* Repeated card component */}
        {Array(8)
          .fill()
          .map((_, index) => (
            <div className="" key={index}>
              <div className="container">
                <div className="card">
                  {/* Image container */}
                  <div className="imgBx">
                    <img
                      className="image"
                      src="https://images.nightcafe.studio/jobs/cUAIt5CTS9sQgkglwshb/cUAIt5CTS9sQgkglwshb.jpg?tr=w-1600,c-at_max"
                    />
                  </div>
                  {/* Short title */}
                  <h2 className="short-title">Fullstack nextjs13...</h2>
                  {/* Expanded content */}
                  <div className="contentBx">
                    <h2>Fullstack nextjs13 web application on dapp</h2>

                    {/* Popup container */}
                    <div className="popup-container">
                      <p className="starts-at">starts at</p>

                      {/* Price and delivery time */}
                      <div className="info-container">
                        <div className="price">
                          <p>
                            <i className="fa-solid fa-dollar-sign"></i> 100
                          </p>
                        </div>

                        <div className="delivery-time">
                          <p>
                            <i className="fa-solid fa-truck-fast"></i> 2 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Author */}
                  <div className="author">SatoshiNakamoto</div>
                  {/* Rating */}
                  <div className="rating">
                    <i className="fa-solid fa-star orange-text"></i> 4.5
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
