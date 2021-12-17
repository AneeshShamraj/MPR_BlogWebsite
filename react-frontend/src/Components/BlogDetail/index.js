import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./styles.css";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  // useEffect(() => {
  //   fetch("https:localhost:5000/blogs/" + )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setBlog(json);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("http:localhost:5000/home/userposts/postname/" + id)

      .then(function (response) {
        setBlog(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="BlogStyle">
      <div className="BlogDetail_wrapper">
        <h1>OFFLINE COLLEGE TO START FROM JANUARY 2022</h1>
      </div>

      <div className="col-lg-9 col-md-9 col-sm-12">
        <p className="lead">
          Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam id dolor id nibh ultricies vehicula.
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
            fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non
            metus auctor fringilla.
          </p>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Donec id elit non mi porta gravida at eget metus. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit.
          </p>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </blockquote>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
            fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non
            metus auctor fringilla.
          </p>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Donec id elit non mi porta gravida at eget metus. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit.
          </p>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. nascetur ridiculus mus. Donec ullamcorper
              nulla non metus auctor fringilla. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </blockquote>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Donec id elit non mi porta gravida at eget metus. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit.
          </p>
        </p>
      </div>
    </div>
  );
};
export default BlogDetail;
