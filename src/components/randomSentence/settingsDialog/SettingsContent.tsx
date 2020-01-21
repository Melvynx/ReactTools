import React from "react";
import { DialogContent, Box, Typography } from "@material-ui/core";
import { CustomSwitch } from "../../Custom/CustomSwitch";

type TypeSettingsContent = {
  checked?: boolean;
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
        <CustomSwitch
          checked={checked}
          onChange={() => onChange(typeSettings)}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Box>
    </DialogContent>
  );
}
