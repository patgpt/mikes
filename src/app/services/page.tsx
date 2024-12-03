import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { asText, PrismicDocument } from "@prismicio/client";
import type { ServicesPageDocument, ServicesPageDocumentDataServicesListItem, Simplify } from "../../../prismicio-types";
import type { ReactNode } from "react";


const ServiceCard = (service: Simplify<ServicesPageDocumentDataServicesListItem>) => (
    <PrismicNextLink
        field={service.service_link}
        className="card bg-base-100 w-full shadow-xl bg-opacity-20 backdrop-blur-2xl border-2 transform transition-transform hover:scale-105"
        key={asText(service.service_title)}
    >
        <figure className="w-full h-56">
            <PrismicNextImage className="object-cover w-full h-56" field={service.service_image} />
        </figure>
        <div className="card-body prose text-base">
            <div className="card-title">
                <PrismicRichText field={service.service_title} />
            </div>
            <PrismicRichText field={service.service_description} />
        </div>
    </PrismicNextLink>
)


const ServiceGrid = ({ children }: {
    children: ReactNode
}) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
    </div>
)

export default async function Page() {
    const client = createClient();
    const page: ServicesPageDocument<string> = await client.getSingle("services_page");

    return (
        <div className="container mx-auto w-full my-8">
            {/* <PrismicNextImage field={page} /> */}
            <div className="prose prose-2xl max-w-6xl">
                <PrismicRichText field={page.data.page_title} />
                <PrismicRichText field={page.data.introduction} />
            </div>
            <hr className="divide-solid divide-y-2 my-8 w-1/2 divide-primary" />

            <ServiceGrid>
                {page.data.services_list.map((service) => (
                    <ServiceCard key={asText(service.service_title)} {...service} />
                ))}
            </ServiceGrid>
            <SliceZone slices={page.data.slices} components={components} />
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page: PrismicDocument = await client.getSingle("services_page");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}