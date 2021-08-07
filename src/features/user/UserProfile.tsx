import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import * as z from 'zod';

import componentStylesCardImg from 'assets/theme/components/card-img';
import componentStyles from 'assets/theme/views/admin/profile';
import { ErrorAlert } from 'components/atoms';
import { ProfileHeader, UserProfileCard } from 'components/molecules';
import { UpdateUserMutation, UpdateUserMutationVariables } from 'generated/graphql';
import { useFillForm } from 'hooks';
import { Maybe, User } from 'types';
import * as v from 'validations';

import AccountInformation from './AccountInformation';
import PersonalInformation from './PersonalInformation';

type Props = {
  mutation: UseMutationResult<UpdateUserMutation, unknown, UpdateUserMutationVariables, unknown>;
  user: Maybe<Partial<Omit<User, 'id'>>>;
};

const schema = z.object({
  id: v.id(),
  firstName: v.firstName(),
  lastName: v.lastName(),
  gender: v.gender(),
  dateOfBirth: z.string().optional(),
  mobileNumber: v.mobileNumber(),
  alternateMobileNumber: v.alternateMobileNumber(),
  email: v.email(),
});

type FormValues = z.infer<typeof schema>;

const useStyles = makeStyles(componentStyles);
const useStylesCardImg = makeStyles(componentStylesCardImg);

const UserProfile: React.FunctionComponent<Props> = ({ mutation, user }: Props) => {
  const classes = { ...useStyles(), ...useStylesCardImg() };
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useFillForm(setValue, user);
  const { mutate, isLoading, isError, error } = mutation;
  const onSubmit = async (variables: FormValues) => {
    mutate(variables);
  };

  return (
    <>
      <ProfileHeader user={user} />
      <Container maxWidth={false} classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + ' ' + classes.order2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                          <Typography variant="h3">Profile</Typography>
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
                  <ErrorAlert isError={isError} error={error} />
                  <AccountInformation control={control} />
                  <Box component={Divider} marginBottom="1.5rem!important" marginTop="1.5rem!important" />
                  <PersonalInformation control={control} />
                </CardContent>
                <CardActions classes={{ root: classes.cardActionsRoot }}>
                  <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                    Save
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.order1 + ' ' + classes.marginBottomXl0 }}
          >
            <UserProfileCard user={user} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
