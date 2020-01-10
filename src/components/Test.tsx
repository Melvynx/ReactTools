import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default function Test() {
  const [text, setText] = useState<string>("salut");
  const handleClick = () => {
    setText("didier");
  };
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <div>
      <p>{text}</p>
      <Button onClick={handleClick} variant="contained">
        Button
      </Button>
      <TextField label="dmdd" onChange={handleChange}></TextField>
      <Skeleton />
    </div>
  );
}
