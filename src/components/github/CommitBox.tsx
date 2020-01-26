import React, { useState } from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { GITHUB_KEY, GITHUB_NAME } from "../utils/constante";

type TypeCommitBox = {
  value: any;
  index: number;
};

export default function CommitBox({ value, index }: TypeCommitBox) {
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  const findLinkAPI = () => {
    let headers = new Headers();

    headers.set("Authorization", "Basic " + btoa(GITHUB_NAME + ":" + GITHUB_KEY));

    fetch(value.url, {
      method: "GET"
      //headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
      if (reponse.status !== 200) {
        console.log("error, commit doesn't load.");
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
    <Box onMouseEnter={findUrl}>
      <Link href={htmlUrl} className="removeUnderline customHoverLink" target="_blank">
        <Box borderBottom={1} borderColor="info" m={1.5} p={0}>
          <Typography noWrap variant="body1" className="customHoverLink">
            {value.commit.message}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
