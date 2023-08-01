import { useEffect, useState, useRef } from 'react';
import { Grid } from './components/Grid/Grid';
import { iGridItem } from './components/Grid/Grid';
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
  useEffect(() => {
    itemsRef.current = items;
  }, []);

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item, _index) => item.id !== id));
  };

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { title: 'New Item', color: 'green', id: Date.now() },
    ]);
  };
  return (
    <main
      className={`content flex flex-col m-auto items-center justify-center`}
    >
      <div></div>
      <Grid
        items={items}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
