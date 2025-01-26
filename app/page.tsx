import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={1} />
    </div>
  );
}
