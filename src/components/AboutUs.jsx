import React from "react";
import MyImg from "../images/myimg.jpg";
const AboutUs = () => {
  return (
    <>
      <div>
        <section class="">
          <div class="gap-24 bg-gray-100 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg ">
              <h1 className="text-5xl mb-5 font-bold xl:block hidden leading-tight text-black  underline decoration-indigo-700 decoration-4 underline-offset-4">
                About Me
              </h1>
              <p class="mb-4">
                Design a logo that not only displays your creative style but also describes who you are as a designer. Keep in mind that your logo is usually where users’ eyes go when they first visit your site. You want to make a good impression from the get-go.
              </p>
              <p>
              A collection of 90 portfolio One Page templates. Each template includes a review, long screenshot, live demo and download links. These templates help create a beautiful online presence for your work. One Page is all you need:
              </p>
            </div>
            <div class="">
              <img class="w-4/7 rounded-lg" src={MyImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
