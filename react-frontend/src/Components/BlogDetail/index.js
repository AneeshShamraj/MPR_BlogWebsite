import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./styles.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(user);
      });
  }, []);
  return (
    <div>
      <div className="BlogDetail_wrapper">{/* <h1>{user.title}</h1> */}</div>
      {/* <nav className="navbar navbar-inverse  navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse"></div>
        </div>
      </nav> */}

      <section className="banner-section"></section>
      <section className="post-content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
              <h1 className="text-center">post Title goes here</h1>
              <ul className="list-inline text-center">
                <li>Author |</li>
                <li>Category |</li>
                <li>Date |</li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <p className="lead">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
              </p>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
                fringilla. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
              {/* <div className="well ">
                <large>This is image</large>
              </div> */}
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                {/* <footer>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer> */}
              </blockquote>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
                fringilla. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. nascetur ridiculus mus. Donec
                  ullamcorper nulla non metus auctor fringilla. Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula, eget lacinia
                  odio sem nec elit. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </blockquote>

              {/* <div className="image-block">
                <img
                  src="https://static.pexels.com/photos/268455/pexels-photo-268455.jpeg"
                  className="img-responsive"
                />
              </div> */}

              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogDetail;
