import React from "react";
import Link from "next/link";
import footerLinks from "../../data/footerLinks";
import withLayout from "../../hocs/withLayout";

interface GlobalFooterProps {
  responsiveConstraintClasses: string;
}

const GlobalFooter: React.FC<GlobalFooterProps> = ({ responsiveConstraintClasses }) => {
  return (
    <footer className='flex justify-center w-full py-6'>
      <div className={[responsiveConstraintClasses, "flex flex-col items-start h-full"].join(" ")}>
        <span>made by <Link href="/" className='font-bold underline'>brandon norsworthy</Link></span>
        <div>
          {
            footerLinks.map((link, index) => (
              <Link
                href={link.href}
                key={link.href + index}
                target={link.openInNewTab ? '_blank' : '_self'}
                className={`${index ? 'ml-4' : ''} font-bold underline text-wedding-tertiary`}>
                {link.label}
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default withLayout(GlobalFooter);