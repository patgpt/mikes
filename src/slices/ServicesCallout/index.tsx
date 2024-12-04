import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesCallout`.
 */
export type ServicesCalloutProps =
  SliceComponentProps<Content.ServicesCalloutSlice>;

/**
 * Component for "ServicesCallout" Slices.
 */
const ServicesCallout = ({ slice }: ServicesCalloutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_callout (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServicesCallout;
