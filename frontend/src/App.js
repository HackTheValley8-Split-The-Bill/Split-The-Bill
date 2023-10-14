import { Suspense, useState, useTransition } from 'react';
import NavigationBar from './NavigationBar';

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
    <NavigationBar page={page} isPending={isPending} navigate={navigate}></NavigationBar>
  );
}

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}
