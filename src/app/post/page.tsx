import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="text-5xl flex justify-center items-center min-h-screen">
      <Button
        className="text-xl font-bold py-8 px-10 cursor-pointer"
        variant="default"
      >
        Hello World
      </Button>
    </div>
  );
}
