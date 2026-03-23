"use client";

import { useEffect, useState } from "react";

export default function Homepage() {
  const [reponames, setReponames] = useState([]);

  async function getRepoNames() {
    const req = await fetch("/api");
    const res = await req.json();

    setReponames(res);
  }

  useEffect(() => {
    getRepoNames();
  }, []);

  return (
    <div className="main">
      <h1>Welcome to Matlab</h1>
      <h2>Find a project you want to try</h2>
      <div className="repo-links">
        <ul>
          {reponames.map((repo) => (
            <li key={repo.name}>
              <a href={`https://${repo.name}-heymateus.vercel.app`}>
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
