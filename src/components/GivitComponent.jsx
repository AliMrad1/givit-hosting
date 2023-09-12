import React from 'react'
import Logo from '../assets/images/logo.jfif'
import { Link } from 'react-router-dom'
function GivitComponent({title,paragraph,urlText,url}) {
  return (
    <div className="signup">
    <div className="donate p-2">
      <div className="container">
        <div className="row justify-content-md-start justify-content-center">
          <div className="col-10 p-4 ">
            <div className="shadow d-flex flex-md-row flex-column  justify-content-center align-items-center">
              <div className="img p-4 text-center ">
                <img style={{ width:'200px',height:'200px' }} src={Logo} alt="" />
              </div>
              <div className="content text-capitalize text-center text-md-start p-4">
                <h1 className="p-2 text-primary fst-italic fw-bold ">
                {title}
                </h1>
                <p className="p-2">
                {paragraph}
                </p>                  
                <Link
                  to={url}
                  className="btn btn-primary pt-2 px-4 rounded-pill "
                >
                  {urlText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GivitComponent