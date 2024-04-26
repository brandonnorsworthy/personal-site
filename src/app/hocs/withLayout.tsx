import React from 'react';

const withLayout = (WrappedComponent: React.FC) => {
  return props => {
    const responsiveConstraintClasses = "w-full w-full md:w-[85%] lg:w-[80%] xl:w-[75%] lg:max-w-[1160px] px-4";

    return (
      <WrappedComponent {...props} responsiveConstraintClasses={responsiveConstraintClasses} />
    );
  };
};

export default withLayout;
