import { BLOG_DETAILS_DATA } from "@/assets/blog-details";
import BlogDetailsLayout from "@/components/layouts/blog-details";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_DETAILS_DATA.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOG_DETAILS_DATA.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Employ Virtual",
    };
  }

  return {
    title: `${blog.title} | Employ Virtual Blog`,
    description: blog.bannerDescription || blog.intro,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = BLOG_DETAILS_DATA.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailsLayout blog={blog} />;
}
