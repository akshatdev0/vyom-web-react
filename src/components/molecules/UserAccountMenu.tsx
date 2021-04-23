import React from 'react';
import { NavLink as NavLinkRRD } from 'react-router-dom';
// reactstrap components
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media, Nav } from 'reactstrap';
import Jdenticon from 'react-jdenticon';

import { useAuthState } from 'features/auth';
import { isMenuItem, Navigation } from 'core/navigation';
import { useGetUserInfoQuery } from 'generated/graphql';

type Props = {
  // The layout for which this menu will be used
  layout: string;
  // navigation which will be displayed inside the component
  navigation: Navigation;
};

const UserAccountMenu: React.FunctionComponent<Props> = ({ layout, navigation }: Props) => {
  const { signOut, user: sessionUser } = useAuthState();
  const id = sessionUser?.id;
  const { data: { user } = {} } = useGetUserInfoQuery({ id: id || '' }, { enabled: !!id });
  const name = user ? user.firstName + ' ' + user.lastName : '<unnamed>';

  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createItems = (navigation: Navigation) => {
    const items: Array<JSX.Element | null> = [];

    if (navigation) {
      for (let i = 0; i < navigation.length; i++) {
        const item = navigation[i];
        if (isMenuItem(item)) {
          const component = (
            <DropdownItem key={i} to={layout + item.path} tag={NavLinkRRD}>
              <i className={item.icon} />
              <span>{item.name}</span>
            </DropdownItem>
          );
          items.push(component);
        }
      }
    }
    return items;
  };

  return (
    <Nav className="align-items-center ml-auto ml-md-0" navbar>
      <UncontrolledDropdown nav>
        <DropdownToggle className="nav-link pr-0" color="" tag="a">
          <Media className="align-items-center">
            <span className="avatar avatar-sm rounded-circle">
              <Jdenticon size="36" value={user ? user.mobileNumber : name} />
            </span>
            <Media className="ml-2 d-none d-lg-block">
              <span className="mb-0 text-sm font-weight-bold">{name}</span>
            </Media>
          </Media>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem className="noti-title" header tag="div">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </DropdownItem>
          {createItems(navigation)}
          <DropdownItem divider />
          <DropdownItem onClick={() => signOut()}>
            <i className="ni ni-user-run" />
            <span>Sign Out</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
};

export default UserAccountMenu;