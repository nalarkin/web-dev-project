import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-4xl md:text-5xl text-blue-700 mb-6 text-center">
          About
        </h1>
        <section className="flex flex-col gap-2 text-lg">
          <h2 className="font-semibold text-xl">
            Section 1 – About who you are
          </h2>
          <p className="">
            I’m a CS student at Georgia State University and will graduate in
            May 2022. In terms of my discovery of computer science, I’m a late
            bloomer. It wasn’t until my Junior year at UW that I discovered my
            passion for computer science. I then learned that I was too far in
            my curriculum to get into the UW CS program, so I transferred to GSU
            to pursue my passion.
          </p>
          <p>
            Recently, outside of school I’ve been building up my personal
            projects. I suspected that websites would provide a good medium to
            share my projects. However, Before fall semester I had zero
            knowledge of HTML/CSS/JS. Four months later, I had developed a NYT
            clone with React and Next.js. (https://nlarkin.us/news)
          </p>
        </section>

        <section className="flex flex-col gap-2 text-lg">
          <h2 className="font-semibold text-xl">
            Section 2 – Project Description and why you choose this project
          </h2>
          <p>This website is an ecommerce store for school supplies.</p>
          <p>
            I chose this for my project because ecommerce sites incoreprate a
            lot of different topics/concepts and skills into a single website.
            Examples include: state management of carts, accessing current cart
            throughout website, fetching databases for content, and displaying
            images.
          </p>
        </section>

        <section className="flex flex-col gap-2 text-lg">
          <h2 className="font-semibold text-xl">
            Section 3 – Description of technology used for your site
          </h2>
          <p>
            Primary framework was React. I used TypeScript to create the
            codebase.
          </p>
          <p>
            For styling I used mostly tailwind, but also used some Sass Modules
            (which is basically non-global CSS)
          </p>
          <p>
            Database, MongoDB. The database stores all the info on products and
            users.
          </p>
        </section>

        <section className="flex flex-col gap-2 text-lg">
          <h2 className="font-semibold text-xl">
            Section 4 – What have you learned in this class
          </h2>
          <p>
            I learned to work with wordpress and got familiar with the EC-2
            service offered by amazon.I also gained some exposure to SQL which
            is nice, because I have very little experience with it.
          </p>
          <p>I also learned some basic PHP andphpAdmin.</p>
          <p>
            It’s my first time working with MongoDB so there was a learning
            curve
          </p>
          <p>
            Also I had heard of react providers, but I hadn’t really used them
            before, and used them extensively in this project so I have a better
            understanding of those now.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

AboutPage.info = {
  title: 'About Page',
  description: 'All About my Site',
};
