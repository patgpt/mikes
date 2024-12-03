import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceContentSection`.
 */
export type ServiceContentSectionProps =
  SliceComponentProps<Content.ServiceContentSectionSlice>;

/**
 * Component for "ServiceContentSection" Slices.
 */
const ServiceContentSection = ({
  slice,
}: ServiceContentSectionProps): JSX.Element => {


  switch (slice.variation) {
    case "imageRightLight":
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          imageRightLight
        </section>
      )

    case "imageLeftDark":
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          imageLeftDark
        </section>
      )
    case "darkBackground":
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          darkBackground
        </section>
      )
    case "imageLeftDark":
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            <PrismicNextImage field={slice.primary.sectionimage} />
            <PrismicRichText field={slice.primary.section_content} />
          </div>
        </section>
      )
    default:
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          Placeholder component for service_content_section (variation:{" "}
          {slice.variation}) Slices
        </section>
      )
  }


};

export default ServiceContentSection;
