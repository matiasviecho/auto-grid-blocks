import React from 'react';
import style from './Grid.module.scss';
export interface iGridItem {
  color?: string;
  title: string;
  fullColumn?: boolean;
}

export const Grid: React.FC<{ items: iGridItem[] }> = ({ items }) => {
  if (!items || items.length === 0) return null;
  const length = items.length;

  const getDivider = () => {
    if (length % 3 === 0) {
      return 3;
    } else if (length % 4 === 0 || (length % 2 === 0 && length !== 2)) {
      return 4;
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
      <ul className={`${style['grid-container']}`}>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={style['grid-item']}
              style={{ '--_color': item.color } as React.CSSProperties}
            >
              {item.title}
            </li>
          );
        }, [])}
      </ul>
    </section>
  );
};
