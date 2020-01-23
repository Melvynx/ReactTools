import React, { useState } from "react";
import { Card, CardHeader, Typography, Box, CardContent, Button, Link } from "@material-ui/core";
import CommitGitHub from "./CommitGitHub";

type TypeCardGItHubRepos = {
  api: any;
};

export default function CardGitHubRepos({ api }: TypeCardGItHubRepos) {
  const [apiCommit, setApiCommit] = useState([]);
  console.log("api basic", api);

  const fetchApiCommit = () => {
    let commitsURL = "";
    if (api.commits_url) {
      console.log("length", api.commits_url.length);
      let arrayCommit = api.commits_url.split("{");
      commitsURL = arrayCommit[0];
    } else {
      return;
    }

    fetch(commitsURL).then(function(reponse) {
      if (reponse.status !== 200) {
        console.log("error, commit doesn't load.");
        return;
      }

      reponse.json().then(function(commits) {
        console.log(commits);
        setApiCommit(commits);
        return;
      });
    });
  };

  const commits = () => {
    if (apiCommit.length > 0) {
      return apiCommit;
    } else {
      fetchApiCommit();
      return [{ x: "y", y: "x" }];
    }
  };

  return (
    <Box width="100%" maxWidth={300}>
      <Card>
        <CardContent>
          <Typography variant="h4">{api.name}</Typography>

          <Typography variant="subtitle2">{api.created_at}</Typography>

          <Link href={api.html_url} target="_blank">
            <Button variant="outlined">Go torepos</Button>
          </Link>
        </CardContent>

        <CommitGitHub apiCommit={commits()}></CommitGitHub>
      </Card>
    </Box>
  );
}
