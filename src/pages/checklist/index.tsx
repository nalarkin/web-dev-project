import React from 'react';

import CheckListItem from '../../components/checklist/CheckListItem';

const checklistItems = [
  {
    requirement:
      'Database Usage – At least one page that pulls information from a custom database table',
    description:
      'Every individual product page pulls from a database (single query), the "All Products" page pulls query for all items.  login connects with a users databas.',
    // href: '',
  },
  {
    requirement:
      'Ajax usage – At least one page that uses ajax to update the information on the page',
    description:
      'Almost every page has AJAX. All products are loaded asyncronously, after the static header/layout is loaded.',
    // href: '',
  },
  {
    requirement:
      'Theme – All pages on the website have to have an overall theme (similar look and feel) that make the site consistent.',
    description: 'Everywhere',
    href: '',
  },
  {
    requirement:
      'New Library Usage – At least one page needs to use a library or other site integration that we have not used before in class.',
    description:
      "I haven't used MongoDB before, so the entire database and how to connect it was new to me. Also I had never used the SWR data fetching package, or Next.js api routes. ",
    href: '',
  },
  {
    requirement:
      'Javascript Usage – Use javascript or a javascript library to add dynamic functionality to a page. ',
    description:
      'Tracking the number of items in the cart, tracking auth state of user, trigger buttons, calling apis.',
    href: '',
  },
  {
    requirement:
      'Membership Area – Have part of your site that only a user that is logged in can use that portion of your site',
    description:
      'The secret area which has content  only visible if you are logged in.',
    href: '/secrets',
  },
  {
    requirement:
      'General User – support and create a user to your system that has login: demouser and password: ThisIsForWPClass and can access the membership area.',
    description: 'Done. Login with the credentials at the login page',
    href: '/login',
  },
  {
    requirement:
      'Checklist Page - The checklist of all the items that are part of the site and the page where they are being demonstrated',
    description: 'See the Checklist Page',
    href: '/checklist',
  },
  {
    requirement:
      'Site Description Page - describe who are the users of your site what is it that you want your users to get out of using the site,  What problem are you trying to solve for the users of the site, What are the actions that you want the users to take once they have used your site',
    description: 'See the Desciption Page',
    href: '/description',
  },
  {
    requirement:
      'About Us Page - Section 1 – About who you are. Section 2 – Project Description and why you choose this project. Section 3 – Description of technology used for your site. Section 4 – What have you learned in this class',
    description: 'See the About Page',
    href: '/about',
  },
  {
    requirement:
      'Homepage - initial Page needs to set up what the site is about and speak to the users of the site',
    description: 'See the home page',
    href: '/',
  },
];

const ChecklistPage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-5xl text-blue-700 mb-6 text-center">
        Checklist
      </h1>
      <ul>
        {checklistItems.map((item, idx) => (
          <CheckListItem {...item} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default ChecklistPage;

ChecklistPage.meta = {
  title: "Checklist Page | Nate's Notebook",
  description: 'Site checklist page.',
};
