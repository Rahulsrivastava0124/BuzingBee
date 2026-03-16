import { NextResponse } from "next/server";
import { fetchBlogCards } from "@/lib/blog";
import { blogPosts } from "@/lib/data";

export const revalidate = 300;

export async function GET() {
  try {
    const posts = await fetchBlogCards();

    if (posts.length > 0) {
      return NextResponse.json({ posts }, { status: 200 });
    }

    return NextResponse.json({ posts: blogPosts }, { status: 200 });
  } catch {
    return NextResponse.json({ posts: blogPosts }, { status: 200 });
  }
}
