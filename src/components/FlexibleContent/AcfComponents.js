import loadable from '@loadable/component';

const AcfComponents = {
  Hero: loadable(() => import('./Hero')),
  Promos: loadable(() => import('./Promos')),
};

export default AcfComponents;