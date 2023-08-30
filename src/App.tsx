import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<IssueListPage />} path='/'/>
        <Route element={<IssueDetailPage />} path='/issueDetail/:issueNumber'/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
