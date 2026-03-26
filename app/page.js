"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [reponames, setReponames] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRepoNames() {
    const req = await fetch("/api");
    const res = await req.json();

    const cleanRepos = res.filter((i) => i.name !== "matlab"); //só tirando o matlab da resposta pra não gerar recursão de links

    setReponames(cleanRepos);
    setLoading(false);
  }

  useEffect(() => {
    getRepoNames();
  }, []);

  return (
    <div className="main">
      <h1>Welcome to Matlab</h1>
      <h3>Take a look into my projects below</h3>
      <div className="repo-links">
        {loading ? (
          <p className="loading">Loading Repos...</p>
        ) : (
          reponames.map((repo) => (
            <Link
              key={repo.name}
              href={`https://${repo.name}-heymateus.vercel.app`}
            >
              {repo.name}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
