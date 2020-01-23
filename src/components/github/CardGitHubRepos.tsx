import React, { useState, useEffect } from "react";
import { Card, CardHeader, Typography, Box, CardContent, Button, Link } from "@material-ui/core";
import CommitGitHub from "./CommitGitHub";

type TypeCardGItHubRepos = {
  api: any;
};

export default function CardGitHubRepos({ api }: TypeCardGItHubRepos) {
  const [apiCommit, setApiCommit] = useState([]);

  const fetchApiCommit = () => {
    let commitsURL = "";
    if (api.commits_url) {
      let arrayCommit = api.commits_url.split("{");
      commitsURL = arrayCommit[0];
    } else {
      return;
    }

    fetch(commitsURL).then(function(reponse) {
      if (reponse.status !== 200) {
        return;
      }

      reponse.json().then(function(commits) {
        setApiCommit(commits);
        return;
      });
    });
  };

  useEffect(() => fetchApiCommit());

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

        <CommitGitHub apiCommit={apiCommit}></CommitGitHub>
      </Card>
    </Box>
  );
}
