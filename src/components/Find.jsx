// import React, { useState } from "react";

// function Find() {
//   const [data,setData]=useState( [
//     {
//       btnName: "All",
//       type: "active",
//       number: "17",
//       text: "items currently needed",
//     },
//     {
//       btnName: "Items",
//       type: "",
//       number: "",
//       text: "Sorry we could not find any requested items that matched your specified criteria.",
//     },
//     {
//       btnName: "Time and Skills",
//       type: "",
//       number: "",
//       text: "Sorry we could not find any requested items that matched your specified criteria.",
//     },
//   ])
//   const changeActive=(name)=>{
//     const updated=data
//     updated.map((d)=>{
//         if(d.btnName!=name)
//         {
//             d.type=''
//         }else {
//             d.type='active'
//         }
//     })
//     setData(updated)
//   }
//   return (
//     <div className="container">
//       <div className="row justify-content-md-center  justify-content-between align-items-center ">
//         <div className="col-md-5 col-8 ">
//           <h4>What Do You Want To Find?</h4>
//           <div className="buttons d-flex justify-content-between px-3">
//             {data.map((d) => {
//               return (
//                 <button key={d}
//                   className={`btn all btn-outline-primary px-3 py-2 rounded-pill ${d.type} `}
//                   onClick={changeActive(d.btnName)}
//                 >
//                   {d.btnName}
//                 </button>
//               );
//             })}
//             {/* <button className="btn all btn-outline-primary px-3 py-2 rounded-pill active">
//               All
//             </button>
//             <button className="btn items btn-outline-primary px-3 py-2 rounded-pill">
//               Items
//             </button>
//             <button className="btn timeAndSkills btn-outline-primary px-3 py-2 rounded-pill">
//               Time and skills
//             </button> */}
//           </div>
//         </div>
//         <div className="col-md-5 col-8 justify-content-md-center justify-content-between">
//           {data.map((d) => {
//             if (d.type == "active") {
//               return (
//                 <>
//                   <h1 className="py-3 fw-bold fs-1">{d.number}</h1>
//                   <p className="text-primary fs-4 fw-bold">
//                     {d.text}
//                   </p>
//                 </>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Find;

import React, { useState } from "react";

function Find() {
  const [data, setData] = useState([
    {
      btnName: "All",
      type: "active",
      number: "17",
      text: "items currently needed",
    },
    {
      btnName: "Items",
      type: "",
      number: "",
      text: "Sorry we could not find any requested items that matched your specified criteria.",
    },
    {
      btnName: "Time and Skills",
      type: "",
      number: "",
      text: "Sorry we could not find any requested items that matched your specified criteria.",
    },
  ]);

  const changeActive = (name) => {
    const updatedData = data.map((d) => ({
      ...d,
      type: d.btnName === name ? "active" : "",
    }));
    setData(updatedData);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center  justify-content-between align-items-center ">
        <div className="col-md-5 col-8 ">
          <h4>What Do You Want To Find?</h4>
          <div className="buttons d-flex justify-content-between px-3">
            {data.map((d,i) => {
              return (
                <button
                  key={i}
                  className={`btn all btn-outline-primary px-3 py-2 rounded-pill ${d.type} `}
                  onClick={()=>changeActive(d.btnName)}
                >
                  {d.btnName}
                </button>
              );
            })}
            {/* <button className="btn all btn-outline-primary px-3 py-2 rounded-pill active">
              All
            </button>
            <button className="btn items btn-outline-primary px-3 py-2 rounded-pill">
              Items
            </button>
            <button className="btn timeAndSkills btn-outline-primary px-3 py-2 rounded-pill">
              Time and skills
            </button> */}
          </div>
        </div>
        <div className="col-md-5 col-8 justify-content-md-center justify-content-between">
  {data.map((d, index) => {
    if (d.type === "active") {
      return (
        <React.Fragment key={index}>
          <h1 className="py-3 fw-bold fs-1">{d.number}</h1>
          <p className="text-primary fs-4 fw-bold">{d.text}</p>
        </React.Fragment>
      );
    }
    return null; // Don't forget to return null for non-active items
  })}
</div>

      </div>
    </div>
  );
}

export default Find;
