import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceCallToAction`.
 */
export type ServiceCallToActionProps =
  SliceComponentProps<Content.ServiceCallToActionSlice>;

/**
 * Component for "ServiceCallToAction" Slices.
 */
const ServiceCallToAction = ({
  slice,
}: ServiceCallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_call_to_action (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ServiceCallToAction;
