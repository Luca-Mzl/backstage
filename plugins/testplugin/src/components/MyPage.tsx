import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Entity } from '@backstage/catalog-model';
import { useEntity } from '@backstage/plugin-catalog-react';
import { ExampleComponent } from './ExampleComponent';


type Props = {
  /** @deprecated The entity is now grabbed from context instead */
  entity?: Entity;
};

export const MyPage = (_props: Props) => {
  const { entity } = useEntity();
  let eName = entity.metadata.name;
  let eDesc = entity.metadata.description as string;
  let eSpec = entity.spec as any;
  console.log(entity.apiVersion);
  
  return(
    <Routes>
      <Route path="/" element={<ExampleComponent name={eName} description={eDesc} spec={eSpec} />} />
    </Routes>
  );
};