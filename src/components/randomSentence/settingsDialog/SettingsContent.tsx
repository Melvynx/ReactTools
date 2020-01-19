import React from "react";
import { DialogContent, Box, Typography, Switch } from "@material-ui/core";

type TypeSettingsContent = {
  checked: boolean;
  onChange: Function;
  className: Record<"background" | "text", string>;
  children: string;
  typeSettings: string;
};

export default function SettingsContent({
  checked,
  onChange,
  className,
  children,
  typeSettings
}: TypeSettingsContent) {
  const classes = className;
  return (
    <DialogContent className={classes.background}>
      <Box
        display="flex"
        border={1}
        alignItems="center"
        p={1}
        borderRadius={5}
        justifyContent="space-between"
      >
        <Typography variant="body1" color="primary" className={classes.text}>
          {children}
        </Typography>
        <Switch
          color="primary"
          checked={checked}
          onChange={() => onChange(typeSettings)}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Box>
    </DialogContent>
  );
}
