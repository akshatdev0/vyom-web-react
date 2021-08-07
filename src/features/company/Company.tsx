import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import componentStyles from 'assets/theme/views/admin/profile';
import { SimpleHeader } from 'components/molecules';
import { useAuthState } from 'features/auth';
import { useCompanyQuery } from 'generated/graphql';

import CompanyDetails from './CompanyDetails';
import CompanyInformation from './CompanyInformation';
import CompanyRegisteredAddress from './CompanyRegisteredAddress';

const useStyles = makeStyles(componentStyles);

const Company: React.FunctionComponent = () => {
  const classes = useStyles();
  const { user: sessionUser } = useAuthState();
  const companyID = sessionUser?.companyOwner?.company?.id;
  const { data: { company } = {} } = useCompanyQuery({ id: companyID || '' }, { enabled: !!companyID });

  return (
    <>
      <SimpleHeader section="Settings" subsection="Company" />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid
            item
            component={Box}
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + ' ' + classes.order2 }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid container classes={{ root: classes.cardHeaderGrid }}>
                    <Grid item xs="auto">
                      <Box marginBottom="0!important">
                        <Typography variant="h3">Company</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box justifyContent="flex-end" display="flex" flexWrap="wrap">
                        <Button variant="contained" color="primary" size="small">
                          Settings
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              />
              <CardContent>
                <CompanyInformation company={company} />
                <hr className="my-4" />
                <CompanyRegisteredAddress company={company} />
                <hr className="my-4" />
                <CompanyDetails company={company} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Company;
