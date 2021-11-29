import React, { useState } from 'react';

import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';

import { collections } from '../../layout/Navigation';
import { List } from './GenericList';
import style from './Menu.module.scss';

const Menu = () => {
  const [isActive, setMenu] = useState<boolean>(false);
  const handleClick = () => {
    setMenu(!isActive);
  };
  const button = (
    <button className={style.btn} onClick={() => handleClick()}>
      <FiMenu size={18} className={isActive ? style.btnAnimation : ''} />
    </button>
  );

  const content = (
    <OutsideClickHandler
      onOutsideClick={() => {
        setMenu(false);
      }}
    >
      <ul className={style.menu}>
        <List
          items={collections}
          renderItem={({ id, text }): JSX.Element => {
            return (
              <li
                key={id}
                className="list-none font-semibold font-sans text-lg mt-3"
              >
                <Link href={id} key={text}>
                  <a
                    className=" py-2 flex hover:bg-gray-100 px-2"
                    onClick={() => handleClick()}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            );
          }}
        />
      </ul>
    </OutsideClickHandler>
  );

  return (
    <div className="hidden lg:flex">
      {isActive ? content : null}
      {button}
    </div>
  );
};

export default Menu;
