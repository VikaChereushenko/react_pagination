import React from 'react';
import { getNumbers } from '../../utils';
import classNames from 'classnames';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pages = getNumbers(1, 9);
  const handleArrows = (arrow: string) => {
    arrow === '«' ? onPageChange(currentPage - 1) : onPageChange(currentPage + 1);
  }

  return (
    <>
      <ul className="pagination">
        <li className={classNames("page-item", {'disabled' : currentPage === pages[0]})}>
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled="true"
            onClick={() => handleArrows('«')}
          >
            «
          </a>
        </li>

        {pages.map(page => (
          <li className={classNames("page-link", {'active' : page === currentPage})}>
            <a
            data-cy="pageLink"
            className="page-link"
            href={`#${page}`}
            onClick = {() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}

        <li className={classNames("page-item", {'disabled' : currentPage === pages[pages.length - 1]})}>
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled="false"
            onClick={() => handleArrows('»')}
          >
            »
          </a>
        </li>
      </ul>
    </>
  );
};
