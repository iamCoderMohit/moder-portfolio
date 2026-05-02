import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mohitjoshi";
  const token = process.env.GITHUB_TOKEN;

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        repositories(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC) {
          nodes {
            name
            description
            url
            stargazerCount
            primaryLanguage { name color }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const user = data?.data?.user;

    return NextResponse.json({
      totalContributions:
        user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0,
      weeks: user?.contributionsCollection?.contributionCalendar?.weeks ?? [],
      repos: user?.repositories?.nodes ?? [],
    });
  } catch {
    return NextResponse.json({ totalContributions: 0, weeks: [], repos: [] });
  }
}
