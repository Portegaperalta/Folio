import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

const API_BASE_URL = process.env.API_BASE_URL;

function normalizeSetCookie(setCookie: string): string {
  let normalized = setCookie.replace(/;\s*Domain=[^;]*/gi, "");

  if (process.env.NODE_ENV === "development") {
    normalized = normalized.replace(/;\s*Secure/gi, "");
    normalized = normalized.replace(/;\s*SameSite=None/gi, "; SameSite=Lax");
  }

  return normalized;
}

async function handler(request: NextRequest, context: RouteContext) {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { message: "API_BASE_URL is not configured." },
      { status: 500 }
    );
  }

  const { path } = await context.params;
  const target = new URL(`${API_BASE_URL.replace(/\/$/, "")}/${path.join("/")}`);
  target.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");

  const isBodylessMethod =
    request.method === "GET" || request.method === "HEAD";

  const upstreamResponse = await fetch(target, {
    method: request.method,
    headers,
    body: isBodylessMethod ? undefined : await request.arrayBuffer(),
    cache: "no-store",
    redirect: "manual",
  });

  const responseHeaders = new Headers(upstreamResponse.headers);
  responseHeaders.delete("set-cookie");

  const response = new NextResponse(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });

  const upstreamSetCookies =
    "getSetCookie" in upstreamResponse.headers
      ? (upstreamResponse.headers as Headers & { getSetCookie(): string[] }).getSetCookie()
      : [];
  for (const setCookie of upstreamSetCookies) {
    response.headers.append("set-cookie", normalizeSetCookie(setCookie));
  }

  return response;
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
export const HEAD = handler;
