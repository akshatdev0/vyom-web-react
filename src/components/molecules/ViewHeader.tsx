import React from 'react';

import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import clsx from 'clsx';

import componentStyles from 'assets/theme/components/headers/simple-header';

type Props = {
  section: string;
  subsection: string;
  children?: React.ReactNode;
};

const useStyles = makeStyles(componentStyles);

const ViewHeader: React.FunctionComponent<Props> = ({ section, subsection, children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
          <Grid container alignItems="center" className={classes.containerRow}>
            <Grid item xs={7} lg={6} className={classes.gridItem}>
              <Typography
                variant="h2"
                component="h6"
                className={clsx(classes.displayInlineBlock, classes.mb0, classes.textWhite)}
              >
                {subsection}
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                classes={{
                  root: classes.breadcrumbRoot,
                  li: classes.breadcrumbLi,
                  ol: classes.breadcrumbOl,
                  separator: classes.breadcrumbSeparator,
                }}
              >
                <Link color="inherit" href="/" onClick={(e: any) => e.preventDefault()}>
                  <Box component={HomeIcon} width="1.25rem!important" height="1.25rem!important" position="relative" />
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={(e: any) => e.preventDefault()}>
                  {section}
                </Link>
                <Typography component="span" className={classes.breadcrumbActive}>
                  {subsection}
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid className={classes.toolbarGrid} item xs={5} lg={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ViewHeader;
