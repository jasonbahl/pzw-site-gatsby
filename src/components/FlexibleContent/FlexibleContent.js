import React from 'react';
import AcfComponents from './AcfComponents';

const FlexibleContent = ({ layout }) => {
  if (!layout?.__typename) {
    return (
      <section id={layout?.id} className="page missing">
        <div className="inner">
          Some ACF component is missing, which is not passed as layout. This means something in the schema is broken for
          this component. Check build console errors.
        </div>
      </section>
    );
  }

  const indexOfLastUnderscore = layout?.__typename.lastIndexOf('_');
  const type = layout.__typename.substring(indexOfLastUnderscore + 1);
  const ComponentName = AcfComponents[type];

  if (!ComponentName) {
    return (
      <section id={layout?.id} className="page missing">
        <div className="inner">
          The ACF component <strong>"{layout.__typename}"</strong> is missing.
        </div>
      </section>
    );
  }

  return (
    <ComponentName data={layout} />
  );
};

export default FlexibleContent;