import { json } from "stream/consumers";
import useCJS from "some-library-cjs";
import useESM from "some-library-esm";

export const dynamic = "force-dynamic";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const response = await fetch("https://dummyjson.com/test");
  const jsonData = response.body ? await json(response.body as any) : null;
  const cjsLibraryData = await useCJS();
  const esmLibraryData = await useESM();

  const pageData = {
    jsonData,
    cjsLibraryData,
    esmLibraryData,
  };

  return (
    <pre>
      <code>{JSON.stringify(pageData, null, 2)}</code>
    </pre>
  );
}
