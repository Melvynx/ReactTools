import React from "react";
import { DialogContent, Box, Typography, InputBase, Theme } from "@material-ui/core";
import { CustomSwitch } from "../../Custom/CustomSwitch";
import { makeStyles } from "@material-ui/styles";

type TypeSettingsContent = {
  checked?: boolean;
  onChange: Function;
  children: string;
  typeSettings: string;
  cSwitch?: boolean;
  value?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    width: 50,
    borderBottom: "1px solid " + theme.palette.secondary.main,
    paddingRight: 5,
    textAlign: "center",
    margin: 8
  },
  background: {
    backgroundColor: theme.palette.divider
  },
  text: {}
}));

export default function SettingsContent({
  checked,
  onChange,
  children,
  typeSettings,
  cSwitch,
  value
}: TypeSettingsContent) {
  const classes = useStyles();
  const customClasses = useStyles();

  //cSwitch define if is an Input or a Switch
  if (!cSwitch) {
    cSwitch = false;
  }

  const toggleChange = (event: any) => {
    onChange(typeSettings, event.target.value);
  };

  return (
    <DialogContent>
      <Box
        className={classes.background}
        display="flex"
        alignItems="center"
        p={1}
        borderRadius={5}
        justifyContent="space-between"
      >
        <Typography variant="body1" className={classes.text}>
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
