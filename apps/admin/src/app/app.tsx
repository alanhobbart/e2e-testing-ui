
import Dashboard from './dashboard/dashboard';
import { Header } from '@test/ui';

export function App() {
  return (
    <> 
      <Header title="Dashboard" backgroundColor="bg-purple-800"></Header>
      <Dashboard/>
      <div>change</div>
    </>
  );
}

export default App;
