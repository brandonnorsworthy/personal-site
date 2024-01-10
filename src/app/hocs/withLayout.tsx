import React from 'react';

const withLayout = (WrappedComponent: React.FC) => {
  return props => {
    const responsiveConstraintClasses = "max-w-full w-full md:w-[85%] lg:w-[65%] md:max-w-[936px] px-2";

    return (
      <WrappedComponent {...props} responsiveConstraintClasses={responsiveConstraintClasses} />
    );
  };
};

export default withLayout;
