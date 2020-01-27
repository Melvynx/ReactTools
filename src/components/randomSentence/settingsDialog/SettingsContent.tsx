import React from "react";
import { DialogContent, Box, Typography, InputBase, Theme } from "@material-ui/core";
import { CustomSwitch } from "../../Custom/CustomSwitch";
import { makeStyles } from "@material-ui/styles";

type TypeSettingsContent = {
  checked?: boolean;
  onChange: Function;
  className: Record<"background" | "text", string>;
  children: string;
  typeSettings: string;
  cSwitch?: boolean;
  value?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    width: 50,
    borderBottom: "1px solid " + theme.palette.primary.main,
    paddingRight: 5,
    textAlign: "center"
  }
}));

export default function SettingsContent({
  checked,
  onChange,
  className,
  children,
  typeSettings,
  cSwitch,
  value
}: TypeSettingsContent) {
  const classes = className;
  const customClasses = useStyles();

  //cSwitch define if is an Input or a Switch
  if (!cSwitch) {
    cSwitch = false;
  }

  const toggleChange = (event: any) => {
    onChange(typeSettings, event.target.value);
  };

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

        {cSwitch ? (
          <CustomSwitch
            checked={checked}
            onChange={() => onChange(typeSettings)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        ) : (
          <InputBase value={value} onChange={toggleChange} className={customClasses.textField} />
        )}
      </Box>
    </DialogContent>
  );
}
