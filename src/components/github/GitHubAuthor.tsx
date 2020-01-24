/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

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
  console.log(api);
  const findApiAuthor = () => {
    let headers = new Headers();

    const username = "melvynx";
    const key = "d09dbf81caeeaeb7e59ba874f8e809ddcf912c35";

    headers.set("Authorization", "Basic " + btoa(username + ":" + key));

    setLoading(true);
    fetch(api[0].owner.url, {
      method: "GET",
      headers: headers
      //credentials: 'user:passwd'
    })
      .then(function(reponse) {
        if (reponse.status !== 200) {
          console.warn("The api have problem.");
          return;
        }

        reponse.json().then(function(author) {
          console.log(author);
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
    <Box>
      {author ? (
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width={100} mr={4} height={100} border={2} borderColor="primary">
              <img
                src={author.avatar_url}
                width={100}
                height={100}
                alt={"profil picture of " + author.login}
              />
            </Box>
            <Typography variant="h3">{author.login}</Typography>
          </Box>
          <Box display="flex">
            <Box>
              <Typography variant="h5">Compagny</Typography>
              <Typography variant="h5">{author.company}</Typography>
            </Box>

            <Box>
              <Typography variant="h5">Location</Typography>
              <Typography variant="h5">{author.location}</Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        "NON"
      )}
    </Box>
  );
}
