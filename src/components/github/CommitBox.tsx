import React, { useState } from "react";
import { Box, Link, Typography, Theme } from "@material-ui/core";
import { GITHUB_KEY, GITHUB_NAME } from "../../utils/constante";
import { makeStyles } from "@material-ui/styles";

type TypeCommitBox = {
  value: any;
  index: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    height: 40,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
    display: "flex",
    transition: theme.transitions.create(["background-color"]),
    "&:hover": {
      backgroundColor: theme.palette.divider
    }
  }
}));

export default function CommitBox({ value, index }: TypeCommitBox) {
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  const classes = useStyles();

  const findLinkAPI = () => {
    let headers = new Headers();

    headers.set("Authorization", "Basic " + btoa(GITHUB_NAME + ":" + GITHUB_KEY));

    fetch(value.url, {
      method: "GET"
      //headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
      if (reponse.status !== 200) {
        console.warn("GitHub api has problem.(on commit url)");
        return "error";
      }
      reponse.json().then(function(url) {
        setHtmlUrl(url.html_url);
      });
    });
  };

  const findUrl = () => {
    if (htmlUrl.length < 1) {
      findLinkAPI();
    }
  };

  return (
    <Box onMouseEnter={findUrl} className={classes.mainBox}>
      <Link href={htmlUrl} className="removeUnderline customHoverLink" target="_blank">
        <Box width="100%" maxWidth={340}>
          <Typography noWrap variant="body1" className="customHoverLink">
            {value.commit.message}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
