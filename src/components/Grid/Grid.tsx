import React from 'react';
import style from './Grid.module.scss';
export interface iGridItem {
  color?: string;
  title: string;
  fullColumn?: boolean;
  id: number;
}

const primeNumbers = [
  3, 7, 9, 11, 13, 15, 21, 23, 27, 17, 19, 31, 37, 41, 43, 47, 71, 73, 79, 97,
];
export const Grid: React.FC<{
  items: iGridItem[];
  handleDelete: (a: number) => void;
}> = ({ items, handleDelete }) => {
  if (!items || items.length === 0) return null;
  const length = items.length;

  const getDivider = () => {
    if (length % 4 === 0 || (length % 2 === 0 && length !== 2)) {
      console.log('get ');
      return 4;
    } else if (length % 3 === 0 || length % 5 === 0) {
      return 3;
    } else if (primeNumbers.includes(length)) {
      return 3;
    } else {
      return -1;
    }
  };

  return (
    <section
      style={
        {
          '--_childs': length,
          '--_columns': getDivider(),
        } as React.CSSProperties
      }
      className={style['container']}
    >
      <p className="text-lg uppercase text-white text-semibold spaced">
        Ahora mismo hay {length} {length > 1 ? 'items' : 'item'}
      </p>

      <ul className={`${style['grid-container']}`}>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={style['grid-item']}
              style={{ '--_color': item.color } as React.CSSProperties}
              onClick={() => handleDelete(item.id)}
            >
              {item.title}
            </li>
          );
        }, [])}
      </ul>
    </section>
  );
};
