export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Project {params.id} Page</h1>
    </div>
  );
}
