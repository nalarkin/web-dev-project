import React from 'react';

const DescriptionPage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-5xl text-blue-700 mb-6 text-center">
        Description
      </h1>
      <section className="flex flex-col gap-2 text-lg">
        <h1 className="font-semibold text-xl">
          Describe who are the users of your site.
        </h1>
        <p className="">People who want to buy school supplies. </p>
        <p>People who want office supply stories with a modern UI.</p>
      </section>
      <section className="flex flex-col gap-2 text-lg">
        <h1 className="font-semibold text-xl">
          What is it that you want your users to get out of using the site?
        </h1>
        <p className="">
          I want them to find the items they need at a cheap price, and have a
          good navigation/user experience
        </p>
      </section>
      <section className="flex flex-col gap-2 text-lg">
        <h1 className="font-semibold text-xl">
          What problem are you trying to solve for the users of the site?
        </h1>
        <p className="">
          Give them easy access to buying school supplies while also creating a
          more modern look to office supply retail.
        </p>
      </section>
      <section className="flex flex-col gap-2 text-lg">
        <h1 className="font-semibold text-xl">
          What are the actions that you want the users to take once they have
          used?
        </h1>
        <p className="">
          Tell their friends about the website because they enjoyed the
          experience so much.
        </p>
      </section>
    </div>
  );
};

export default DescriptionPage;
