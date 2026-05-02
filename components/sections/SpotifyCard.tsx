"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";

interface SpotifyData {
  isPlaying: boolean;
  title: string | null;
  artist: string;
  album: string;
  albumArt: string;
  songUrl: string;
  progress?: number;
  duration?: number;
}

export default function SpotifyCard() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/spotify");
      const json = await res.json();
      setData(json);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data?.title) return null;

  const progressPct =
    data.progress && data.duration
      ? (data.progress / data.duration) * 100
      : null;

  return (
    <div className="section" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          className="card"
          style={{
            padding: "0.9rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            cursor: "pointer",
          }}
        >
          {/* Album art */}
          {data.albumArt ? (
            <img
              src={data.albumArt}
              alt={data.album}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          ) : (
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                background: "var(--pill-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Music2 size={20} style={{ color: "var(--text-muted)" }} />
            </div>
          )}

          {/* Track info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
              {/* Spotify green dot */}
              <span
                style={{
                  fontSize: "0.7rem",
                  color: data.isPlaying ? "#1DB954" : "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                {data.isPlaying ? "▶ Now Playing" : "Last Played"}
              </span>
              {/* Spotify logo text */}
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#1DB954",
                  fontWeight: 600,
                  marginLeft: "auto",
                  flexShrink: 0,
                }}
              >
                spotify
              </span>
            </div>

            <p
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.title}
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.artist}
            </p>

            {/* Progress bar */}
            {progressPct !== null && (
              <div
                style={{
                  marginTop: "0.5rem",
                  height: "3px",
                  background: "var(--pill-bg)",
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progressPct}%`,
                    height: "100%",
                    background: "#1DB954",
                    borderRadius: "9999px",
                    transition: "width 1s linear",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
