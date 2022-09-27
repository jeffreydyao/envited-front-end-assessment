interface EventDetailProps {
  /** Local URL to the detail icon */
  iconSrc: string;
  /** Primary detail text */
  label: string;
  /** Secondary detail text */
  caption?: string;
  /** The detail caption will be replaced with the given HTML elements if provided. */
  children?: React.ReactNode;
  /** URL to redirect to when detail clicked */
  href?: string;
}

export default function EventDetail(props: EventDetailProps) {
  return (
    <div className="flex gap-5 items-center">
      <img src={props.iconSrc} />
      <div>
        <p className="text-primary-text-purple-light font-bold">
          {props.label}
        </p>
        {props.children ? (
          props.children
        ) : (
          <p className="text-[#4F4F4F] text-sm">{props.caption}</p>
        )}
      </div>
    </div>
  );
}
