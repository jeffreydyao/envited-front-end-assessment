interface ButtonProps {
  /** Button text */
  label: string;
  href?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="px-5 py-4 font-bold text-white bg-gradient-to-r from-primary-envited-purple to-primary-envited-pink rounded-xl hover:brightness-105 transition-all">
      <a href={props.href}>{props.label}</a>
    </button>
  );
}
