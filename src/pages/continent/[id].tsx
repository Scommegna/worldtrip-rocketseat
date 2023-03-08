import { useRouter } from "next/router";

// Dynamic page for continents
export default function CountryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>hello {id}</p>
    </div>
  );
}
