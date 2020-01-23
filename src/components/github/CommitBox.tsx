import React, { useState } from "react";
import { Box, Link, Typography } from "@material-ui/core";

type TypeCommitBox = {
  value: any;
  index: number;
};

export default function CommitBox({ value, index }: TypeCommitBox) {
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  const findLinkAPI = () => {
    let urlHTMLURL = "";
    fetch(value.url).then(function(reponse) {
      if (reponse.status !== 200) {
        console.log("error, commit doesn't load.");
        return "error";
      }
      reponse.json().then(function(url) {
        setHtmlUrl(url.html_url);
        return url.html_url;
      });
    });
    return urlHTMLURL;
  };

  const findLink = () => {
    if (htmlUrl.length < 1) {
      findLinkAPI();
      return "wait..";
    } else {
      return htmlUrl;
    }
  };

  return (
    <Box>
      <Link href={findLink()} target="_blank">
        <Box border={1} borderColor="primary" m={1} p={0.5}>
          <Typography noWrap variant="body1">
            {index}
            {value.commit.message}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
