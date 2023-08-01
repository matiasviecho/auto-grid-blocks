import { Grid } from './components/Grid/Grid';
import { iGridItem } from './components/Grid/Grid';
function App() {
  const gridItems: iGridItem[] = [
    { title: 'Item 1', color: 'red' },
    { title: 'Item 2', color: 'violet' },
    { title: 'Item 3', color: 'goldenrod' },
    { title: 'Item 4', color: 'pink' },
    { title: 'Item 5', color: '#3e3e3e' },
    { title: 'Item 6', color: 'blue' },
  ];

  return (
    <main className="content">
      <Grid items={gridItems} />
    </main>
  );
}

export default App;
