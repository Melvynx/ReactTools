import React, { useState, useEffect } from "react";
import { Card, Typography, Box, CardContent, Button, Link, makeStyles } from "@material-ui/core";
import CommitGitHub from "./CommitGitHub";

type TypeCardGItHubRepos = {
  api: any;
};

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid " + theme.palette.primary.main
  }
}));

export default function CardGitHubRepos({ api }: TypeCardGItHubRepos) {
  const [apiCommit, setApiCommit] = useState([]);

  const classes = useStyles();

  const fetchApiCommit = () => {
    let commitsURL = "";
    if (api.commits_url) {
      commitsURL = api.commits_url.replace("{/sha}", "");
    } else {
      return;
    }

    let headers = new Headers();

    const username = "melvynx";
    const key = "cb15fc5496778827637f265238600794d28f3e07";

    headers.set("Authorization", "Basic " + btoa(username + ":" + key));

    fetch(commitsURL, {
      method: "GET",
      //headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
      if (reponse.status !== 200) {
        return;
      }

      reponse.json().then(function(commits) {
        setApiCommit(commits);
        return;
      });
    });
  };

  useEffect(() => {
    if (apiCommit.length < 1) {
      fetchApiCommit();
    }
  });

  return (
    <Box width="100%" maxWidth={350}>
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textSecondary" align="center" variant="h4">
            {api.name}
          </Typography>

          <Typography color="textSecondary" variant="subtitle2" align="center">
            Created at {api.created_at}
          </Typography>
        </CardContent>

        <CommitGitHub apiCommit={apiCommit}></CommitGitHub>

        <Link href={api.html_url} target="_blank" className="removeUnderline">
          <Box display="flex" justifyContent="right" m={1}>
            <Button color="primary" size="small" variant="outlined">
              Go to repos
            </Button>
          </Box>
        </Link>
      </Card>
    </Box>
  );
}
