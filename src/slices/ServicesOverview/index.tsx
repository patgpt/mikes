import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesOverview`.
 */
export type ServicesOverviewProps =
  SliceComponentProps<Content.ServicesOverviewSlice>;

/**
 * Component for "ServicesOverview" Slices.
 */
const ServicesOverview = ({ slice }: ServicesOverviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_overview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServicesOverview;
