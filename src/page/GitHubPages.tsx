import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import CardGitHubRepos from "../components/github/CardGitHubRepos";
import GitHubAuthor from "../components/github/GitHubAuthor";

export default function GitHubPages() {
  const [apiRepos, setApi] = useState([]);

  const fetchApiGitHub = () => {
    let headers = new Headers();

    const username = "melvynx";
    const key = "d09dbf81caeeaeb7e59ba874f8e809ddcf912c35";

    headers.set("Authorization", "Basic " + btoa(username + ":" + key));

    fetch("https://api.github.com/users/melvynx/repos", {
      method: "GET",
      headers: headers
      //credentials: 'user:passwd'
    }).then(function(reponse) {
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

  useEffect(() => {
    if (apiRepos.length < 1) {
      fetchApiGitHub();
    }
  });

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={1000} width="100%">
        <GitHubAuthor api={apiRepos} />
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
