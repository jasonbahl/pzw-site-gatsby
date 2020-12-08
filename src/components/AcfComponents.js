import loadable from '@loadable/component';

const AcfComponents = {
  Hero: loadable(() => import('./Hero/Hero')),
  Promos: loadable(() => import('./Promos/Promos')),
};

export default AcfComponents;