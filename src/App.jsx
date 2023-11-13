import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Komponen-komponen di dalamnya */}
      <Home />
    </QueryClientProvider>
  );
}

export default App;