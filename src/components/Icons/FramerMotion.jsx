const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 12 4 4v16L20 4v16l-4-4" />
    <path d="m20 12-8 8-4-4" />
  </svg>
);
export { SvgComponent as IconFramerMotion };
