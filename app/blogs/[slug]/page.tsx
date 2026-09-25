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

  const title = `${blog.title} | Employ Virtual Blog`;
  const description = blog.bannerDescription || blog.intro;
  const canonicalUrl = `https://www.employvirtual.com/blogs/${slug}`;
  const logoUrl = "https://www.employvirtual.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femploy_virtual_logo.4a04620f.png&w=640&q=75";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Employ Virtual",
      type: "article",
      images: [
        {
          url: logoUrl,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Employ Virtual",
      title,
      description,
      images: [logoUrl],
    },
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
