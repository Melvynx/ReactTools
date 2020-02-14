import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import User from "../../auth/User/User";

export default function AuthButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box position="absolute" top={12} right={10}>
      <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
        Account
      </Button>

      <User open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
