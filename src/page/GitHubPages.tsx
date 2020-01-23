import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import CardGitHubRepos from "../components/github/CardGitHubRepos";

export default function GitHubPages() {
  const [apiRepos, setApi] = useState([]);

  const fetchApiGitHub = () => {
    fetch("https://api.github.com/users/melvynx/repos").then(function(reponse) {
      if (reponse.status !== 200) {
        console.warn("The api have problem.");
        return;
      }

      reponse.json().then(function(data) {
        console.log(data);
        setApi(data);
        return;
      });
    });
  };

  useEffect(() => fetchApiGitHub());

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={1000} width="100%" border={1} borderColor="primary">
        <p>test !!!</p>
        <Grid container justify="center" spacing={2}>
          {apiRepos.map((value, index) => (
            <Grid item>
              <CardGitHubRepos api={value} key={index}></CardGitHubRepos>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
