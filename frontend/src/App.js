import { Suspense, useState, useTransition } from 'react';
import Toolbar from './Toolbar';

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

function Router() {
  const [page, setPage] = useState('/login');
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  return (
    <Toolbar page={page} isPending={isPending} navigate={navigate}></Toolbar>
  );
}

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}
