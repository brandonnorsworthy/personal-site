import React from 'react';

const withLayout = (WrappedComponent: React.FC) => {
  return props => {
    const responsiveConstraintClasses = "max-w-full w-full md:w-[85%] lg:w-[75%] xl:w-[65%] md:max-w-[936px] px-4";

    return (
      <WrappedComponent {...props} responsiveConstraintClasses={responsiveConstraintClasses} />
    );
  };
};

export default withLayout;
