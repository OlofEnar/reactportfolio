import React, { useEffect, useState } from "react";
import Smiley from "../assets/images/smiley.svg"

export default function FetchGitHub() {
  const [repos, setRepos] = useState([]);
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate delay for loading screen
    const delay = setTimeout(() => {
      fetch("https://api.github.com/users/olofenar/repos")
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Could not read data", error);
          setLoading(false); // Set loading to false in case of error
        });
    }, 5000);

    // Clear timeout in case of re-rendering 
    return () => clearTimeout(delay);
  }, []);

  // Exclude some unwanted repos
  const filteredRepos = repos.filter(repo => repo.name !== 'olofenar');

  const toggleInfo = (repoName) => {
    if (expandedRepo === repoName) {
      setExpandedRepo(null);
    } else {
      setExpandedRepo(repoName);
    }
  };

  return (
    <div className="center content-coding">
      {loading ? (
        <div className="loading-container">
          <p>Loading projects...</p>
          <figure className="loading-img animate-rotation">
            <img src={Smiley}></img>
          </figure>
          </div>
      ) : (
        filteredRepos.map((repo) => (
          <div className="repo-container" key={repo.name}>
            <section className="repo">
              <p className="repo-language">{repo.language}{repo.name === "SchoolDb" ? ", SQL" : ""}</p>
              <p className="repo-title">{repo.name}</p>
              <div className="repo-expand" onClick={() => toggleInfo(repo.name)}>
                <i className={`fa fa-chevron-${expandedRepo === repo.name ? 'up' : 'down'}`} aria-hidden="true"></i>
              </div>
            </section>
            <section className={`repo-info ${expandedRepo === repo.name ? "show-info" : ""}`}>
              <p>{repo.description}</p>
            </section>
          </div>
        ))
      )}
    </div>
  );
}
