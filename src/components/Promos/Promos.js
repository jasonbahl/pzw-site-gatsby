import React from 'react';
import styled from 'styled-components';

const PromosSection = styled.section`

`
const Promo = styled.div`

`

const Promos = (layout) => {
  
  return (
    <PromosSection>
      {layout.data.promo.map(promo => (
        <Promo dangerouslySetInnerHTML={{__html: promo.promotext}} />
      ))}
    </PromosSection>
  )

};

export default Promos;