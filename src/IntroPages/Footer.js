
import React from "react";
import ButtonClass from "./ButtonClass";

class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(

            <footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">
    <section >
      <form >
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>GET IN TOUCH</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
          <ButtonClass className=' btn-outline-light btn-lg btn-dark' myTitle="Contact Me"/>
          </div>
          <div className="col-auto">
          <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i id="icon2"
                      className="fab fa-facebook-f"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i id="icon2"
                      className="fab fa-twitter"></i></a>

              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i id="icon2"
                      className="fab fa-linkedin-in"></i></a>
      </section>
          </div>
        </div>
      </form>
    </section>
  </div>
</footer>
            
        )
    }
}
export default Footer;