import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { add } from "@workspace/math/add";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  console.log(api);
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <div>{add(1, 2)}</div>
        <Input
          type="text"
          placeholder="Enter your name"
        />
        wqw
      </div>
    </div>
  );
}
