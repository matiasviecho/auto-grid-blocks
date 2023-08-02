import { useEffect, useState, useRef } from 'react';
import { Grid } from './components/Grid/Grid.tsx';
import { iGridItem } from './components/Grid/Grid.tsx';
function App() {
  const [items, setItems] = useState<iGridItem[]>([
    { title: 'Item 1', color: 'red', id: 1 },
    { title: 'Item 2', color: 'violet', id: 2 },
    { title: 'Item 3', color: 'goldenrod', id: 3 },
    { title: 'Item 4', color: 'pink', id: 4 },
    { title: 'Item 5', color: '#3e3e3e', id: 5 },
    { title: 'Item 6', color: 'blue', id: 6 },
    { title: 'Item 6', color: '#9e9e9e,', id: 7 },
    { title: 'Item 6', color: '#9e9e9e', id: 8 },

    { title: 'Item 6', color: '#9e9e9e', id: 9 },
    { title: 'Item 6', color: '#9e9e9e', id: 10 },
  ]);
  const itemsRef = useRef<iGridItem[] | null>();
  const idRef = useRef<number>(11);
  useEffect(() => {
    itemsRef.current = items;
  }, []);

  const saveArray = () => {
    itemsRef.current = items;
  };

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item, _index) => item.id !== id));
  };

  const addItem = (e: React.FormEvent) => {
    const getColor = () => {
      const number = Math.random();
      if (number < 0.25) {
        return '#241468';
      } else if (number < 0.5) {
        return '#9F0D7F';
      } else if (number < 0.75) {
        return '#EA1179';
      } else {
        return '#F79BD3';
      }
    };

    e.preventDefault();
    setItems((prevItems) => [
      ...prevItems,
      {
        title: titleRef.current || '',
        color: getColor(),
        id: idRef.current,
      },
    ]);
    idRef.current = idRef.current + 1;
  };
  const titleRef = useRef<string>();

  const restoreArray = () => {
    if (typeof itemsRef.current !== 'undefined' && itemsRef.current) {
      setItems(itemsRef.current);
    }
  };
  return (
    <main
      className={`content flex flex-col m-auto items-center justify-center gap-16`}
    >
      <div className="flex gap-8">
        <button onClick={() => saveArray()}>Save Grid</button>
        <form
          onSubmit={(e) => addItem(e)}
          className="flex gap-16"
        >
          <input
            type="text"
            name="title"
            id="title"
            maxLength={20}
            onChange={(e) => {
              titleRef.current = e.target.value;
            }}
            placeholder="Titulo"
          />
          <button type="submit">Guardar Item</button>
        </form>
        <button onClick={() => restoreArray()}>Restore Grid</button>
      </div>
      <Grid
        items={items}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
