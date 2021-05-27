/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* eslint-disable */
import React from 'react';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  UncontrolledTooltip,
} from 'reactstrap';
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  PageSettingsModel,
  Sort,
} from '@syncfusion/ej2-react-grids';
// core components
import { SimpleHeader } from 'components/molecules';
import { data } from './datasource';

const Products: React.FunctionComponent = () => {
  const pageSettings: PageSettingsModel = { pageSize: 6 };

  return (
    <>
      <SimpleHeader name="Products" parentName="Product Catalog" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader className="border-0">
            <h3 className="mb-0">Light table</h3>
          </CardHeader>
          <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings}>
            <ColumnsDirective>
              <ColumnDirective field="OrderID" width="100" textAlign="Right" />
              <ColumnDirective field="CustomerID" width="100" />
              <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
              <ColumnDirective field="Freight" width="100" format="C2" textAlign="Right" />
              <ColumnDirective field="ShipCountry" width="100" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
          </GridComponent>
        </Card>
        <Card>
          <CardHeader className="border-0">
            <h3 className="mb-0">Light table</h3>
          </CardHeader>

          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th className="sort" data-sort="name" scope="col">
                  Project
                </th>
                <th className="sort" data-sort="budget" scope="col">
                  Budget
                </th>
                <th className="sort" data-sort="status" scope="col">
                  Status
                </th>
                <th scope="col">Users</th>
                <th className="sort" data-sort="completion" scope="col">
                  Completion
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody className="list">
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={require('assets/img/theme/bootstrap.jpg').default} />
                    </a>
                    <Media>
                      <span className="name mb-0 text-sm">Argon Design System</span>
                    </Media>
                  </Media>
                </th>
                <td className="budget">$2500 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    <span className="status">pending</span>
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip160923422"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-1.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip160923422">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip514211229"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-2.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip514211229">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip726857513"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-3.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip726857513">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip469193676"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip469193676">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">60%</span>
                    <div>
                      <Progress max="100" value="60" color="warning" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={require('assets/img/theme/angular.jpg').default} />
                    </a>
                    <Media>
                      <span className="name mb-0 text-sm">Angular Now UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td className="budget">$1800 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-success" />
                    <span className="status">completed</span>
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip31874212"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-1.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip31874212">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip252827779"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-2.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip252827779">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip809957233"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-3.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip809957233">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip979845150"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip979845150">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" color="success" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={require('assets/img/theme/sketch.jpg').default} />
                    </a>
                    <Media>
                      <span className="name mb-0 text-sm">Black Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td className="budget">$3150 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-danger" />
                    <span className="status">delayed</span>
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip728862912"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-1.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip728862912">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip578670996"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-2.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip578670996">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip890233574"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-3.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip890233574">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip681662370"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip681662370">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">72%</span>
                    <div>
                      <Progress max="100" value="72" color="danger" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={require('assets/img/theme/react.jpg').default} />
                    </a>
                    <Media>
                      <span className="name mb-0 text-sm">React Material Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td className="budget">$4400 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-info" />
                    <span className="status">on schedule</span>
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip972725183"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-1.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip972725183">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip74486040"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-2.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip74486040">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip650279481"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-3.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip650279481">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip228854968"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip228854968">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">90%</span>
                    <div>
                      <Progress max="100" value="90" color="info" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={require('assets/img/theme/vue.jpg').default} />
                    </a>
                    <Media>
                      <span className="name mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td className="budget">$2200 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-success" />
                    <span className="status">completed</span>
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip450658649"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-1.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip450658649">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip66804543"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-2.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip66804543">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip897599395"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-3.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip897599395">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      id="tooltip207249319"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip207249319">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">100%</span>
                    <div>
                      <Progress max="100" value="100" color="success" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>

          <CardFooter className="py-4">
            <nav aria-label="...">
              <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                <PaginationItem className="disabled">
                  <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    2 <span className="sr-only">(current)</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
};

export default Products;
