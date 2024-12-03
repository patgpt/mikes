import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
    const { uid } = await params;
    const client = createClient();
    const page = await client
        .getByUID("service_detail_page", uid)
        .catch(() => notFound());

    return (
        <div>
            <PrismicNextImage
                className="h-96 object-cover"
                field={page.data.hero_image} />
            <div className="container mx-auto prose prose-2xl my-8">
                <PrismicRichText field={page.data.service_title} />
                <PrismicRichText field={page.data.introduction} />
                <PrismicRichText field={page.data.service_details} />
            </div>
            <SliceZone slices={page.data.slices} components={components} />
        </div>
    )
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { uid } = await params;
    const client = createClient();
    const page = await client
        .getByUID("service_detail_page", uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("service_detail_page");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}