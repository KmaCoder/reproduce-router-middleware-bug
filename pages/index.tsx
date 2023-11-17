import {useRouter} from "next/router";
import {useEffect} from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      console.log('router is not ready yet');

      return;
    }

    void router.push('/home-redirect', '/');
  }, [router.isReady, router]);

  return (
      <main>
        Redirecting to home...
      </main>
  )
}
