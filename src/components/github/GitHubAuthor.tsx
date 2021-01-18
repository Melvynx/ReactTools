/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import GitHubAuthorInformation from "./GitHubAuthorInformation";
import { GITHUB_KEY, GITHUB_NAME } from "../../utils/constante";
import GitHubAuthorSkeleton from "./Skeleton/GitHubAuthorSkeleton";

type TypeGitHubAuthor = {
  api: any;
};

type GithuhAuthorType = {
  login: string;
  company: string;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
};

export default function GitHubAuthor({ api }: TypeGitHubAuthor) {
  const [author, setAuthor] = useState<GithuhAuthorType>();
  const [loading, setLoading] = useState<Boolean>(false);

  const findApiAuthor = () => {
    let headers = new Headers();

    headers.set("Authorization", "Basic " + btoa(GITHUB_NAME + ":" + GITHUB_KEY));

    setLoading(true);
    fetch(api[0].owner.url, {
      method: "GET"
      //headers: headers
      //credentials: 'user:passwd'
    })
      .then(function(reponse) {
        if (reponse.status !== 200) {
          console.warn("GitHub api has problem.(on author)");
          return;
        }

        reponse.json().then(function(author) {
          setAuthor(author);
          return;
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (!author && !loading && api.length > 1) {
      findApiAuthor();
    }
  }, [author, loading, api]);

  return (
    <Box m={2}>
      {author ? (
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width={100} mr={4} height={100}>
              <img
                src={author.avatar_url}
                width={100}
                height={100}
                alt={"profil picture of " + author.login}
              />
            </Box>
            <Typography color="textPrimary" variant="h3">
              {author.login}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={3}>
            <GitHubAuthorInformation label="Company">{author.company}</GitHubAuthorInformation>

            <GitHubAuthorInformation label="Location">{author.location}</GitHubAuthorInformation>

            <GitHubAuthorInformation label="Followers">
              {String(author.followers)}
            </GitHubAuthorInformation>

            <GitHubAuthorInformation label="Following">
              {String(author.following)}
            </GitHubAuthorInformation>
          </Box>
        </Box>
      ) : (
        <GitHubAuthorSkeleton />
      )}
    </Box>
  );
}
