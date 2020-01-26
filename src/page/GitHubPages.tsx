import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import CardGitHubRepos from "../components/github/CardGitHubRepos";
import GitHubAuthor from "../components/github/GitHubAuthor";
import HomePageLinkButton from "../components/HomePage/HomePageLinkButton";
import { GITHUB_NAME, GITHUB_KEY } from "../components/utils/constante";

export default function GitHubPages() {
  const [apiRepos, setApi] = useState([]);

  const fetchApiGitHub = () => {
    let headers = new Headers();

    headers.set("Authorization", "Basic " + btoa(GITHUB_NAME + ":" + GITHUB_KEY));

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
        <HomePageLinkButton />

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
