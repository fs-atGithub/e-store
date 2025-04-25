import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  return (
    <div className={"p-4"}>
      <div className={"flex flex-col gap-y-4"}>
        <Button variant={"elevated"}>Click me</Button>
        <div className={"flex flex-col gap-y-4"}>
          <Input placeholder={"input field "} />
        </div>
        <div className={"flex flex-col gap-y-4"}>
          <Progress value={80} />
        </div>
        <div className={"flex flex-col gap-y-4"}>
          <Textarea defaultValue={80} />
        </div>
        <div className={"flex flex-col gap-y-4"}>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};
export default Home;
