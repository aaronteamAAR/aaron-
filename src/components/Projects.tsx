// credit: https://github.com/nexxeln/nexxel.dev/blob/main/src/pages/blog.astro

import { useEffect, useRef, useState } from "react";
import React from  'react';
import Fuse from "fuse.js";
import { Blog } from "./Blog";
import type { Post } from "../types";
import '../styles/input.css'

type Result = {
  item: Post;
  refIndex: number;
  score: number;
};

export const BlogPosts = ({ posts }: { posts: Post[] }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Fuse.FuseResult<Post>[] | null>(null);

  const fuse = new Fuse(posts, {
    keys: [
      {
        name: "title",
        getFn: (post) => post.frontmatter.title,
      },
      {
        name: "description",
        getFn: (post) => post.frontmatter.description,
      },
    ],
    threshold: 0.3,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search).get("q");

    if (searchParams) setQuery(searchParams);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd =
          searchParams?.length || 0;
      }
    }, 50);
  }, []);

  useEffect(() => {
    setResults(query.length > 0 ? fuse.search(query) : null);

    if (query.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", query);

      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      history.pushState(null, "", newUrl);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [query]);
   
  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search posts"
        value={query}
        autoComplete="off"
        ref={inputRef}
        onChange={(event) => setQuery(event.target.value)}
      />

      {results ? (
        results.length > 0 ? (
          results.map((result) => (
            <Blog
              key={`${result.refIndex}-${result.item.url}`}
              url={result.item.url}
              title={result.item.frontmatter.title}
              description={result.item.frontmatter.description}
              date={result.item.frontmatter.pubDate}
              readingTime={result.item.frontmatter.readingTime}
            />
          ))
        ) : (
          <>
            <span className="text-(xl neutral-300) p-4">
              I really have no idea on what you are looking for. Maybe try one of these instead?
            </span>

            <div className="pb-6" />
            {posts.slice(0, 3).map((post) => (
              <Blog
                key={`${post.url}`}
                url={post.url}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.pubDate}
                readingTime={post.frontmatter.readingTime}
              />
            ))}
          </>
        )
      ) : (
        posts.map((post) => (
          <Blog
            key={post.url}
            url={post.url}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            date={post.frontmatter.pubDate}
            readingTime={post.frontmatter.readingTime}
          />
        ))
      )}
    </>
  );
};