import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider
  } from 'react-router-dom'
  


  // pages
  import ImageGrid from './pages/ImageGrid'
  import TodoList from './pages/TodoList'
  
  // layouts
  import RootLayout from './layouts/RootLayout'
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<TodoList />} />
        <Route 
          path="imagegrid" 
          element={<ImageGrid />} 
          loader={async ({ params }) => {
            return fetch("https://picsum.photos/v2/list?page=6&limit=16");
          }}
        />
      </Route>
    )
  )
  
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default App
  