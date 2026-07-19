import { useCallback, useEffect, useState } from "react";

/**
 * Custom wouter location hook, hash-based so it works on GitHub Pages with
 * zero server configuration (no 404.html redirect trick, no need to know
 * the repo name / deployment subpath in advance — unlike path-based
 * routing, which would need both).
 *
 * The twist: the site also has plain in-page anchors like href="#work" for
 * scrolling to a section on the home page. Those aren't app routes, so any
 * hash that doesn't start with "/" is treated as "home" here rather than an
 * unknown route — this is what stops #work / #skills / #experience /
 * #contact from ever hitting the NotFound catch-all. Home.tsx separately
 * handles the actual scrolling for those (see its mount effect).
 */
const getPath = () => {
  const hash = window.location.hash.slice(1);
  return hash.startsWith("/") ? hash : "/";
};

export function useAppHashLocation(): [string, (to: string, opts?: { replace?: boolean }) => void] {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string, { replace = false }: { replace?: boolean } = {}) => {
    const url = new URL(window.location.href);
    url.hash = `#${to}`;
    if (replace) {
      window.history.replaceState(null, "", url);
      setPath(getPath());
    } else {
      window.location.hash = `#${to}`;
    }
  }, []);

  return [path, navigate];
}
