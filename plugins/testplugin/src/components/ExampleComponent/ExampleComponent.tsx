import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

type ExampleProps = {
  name: string,
  description: string,
  spec: {
    type: string,
    lifecycle: string,
    owner: string,
    system: string
  }
};

export const ExampleComponent = (_props: ExampleProps) => (
  <Page themeId="tool">
    <Header title="Welcome to testplugin!" subtitle={`Current ${_props.spec.type}: ${_props.name}`}>
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Service description">
            <Typography variant="body1">
              {_props.description}
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfoCard title="Service spec">
            <Typography variant="body1">
              {JSON.stringify(_props.spec)}
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
