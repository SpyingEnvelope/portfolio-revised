/* This component displays the blue header in every section */

/*PROPS:
children: The children to be displayed inside of the header */
function SectionHeader({ children }) {

  /* The return statement of the component */
  return (
    <h2 className="text-lg lg:text-xl bold-instrument-sans text-[#3698D5] tracking-widest">
      {children}
    </h2>
  );
}

export default SectionHeader;
