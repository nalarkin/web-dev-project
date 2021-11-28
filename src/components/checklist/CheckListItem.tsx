import React from 'react';

import Link from 'next/link';

interface CheckListItemProps {
  requirement: string;
  description?: string;
  href?: string;
}

const CheckListItem = ({
  requirement,
  description,
  href,
}: CheckListItemProps) => {
  let content = null;
  if (href) {
    content = (
      <Link href={href}>
        <a className="ml-10">{description}</a>
      </Link>
    );
  } else if (description) {
    content = <div className="ml-10">{description}</div>;
  }

  return (
    <li className="list-disc mt-5">
      <div className={`${description ? '' : 'text-red-600'}`}>
        {requirement}
      </div>
      {content}
    </li>
  );
};

export default CheckListItem;
