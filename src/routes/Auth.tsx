import { Route, Switch, useLocation } from "react-router-dom";
import { Layout } from "components/Layout/index";
import PageNotFound from "components/404";
import { Maintenance } from "components/Maintenance";
import { routeConfigs } from "./config";

const maintenancePages: string[] = [
  "/staking-farm",
  "/staking-farm/create",
  "/staking-token",
  "/staking-token/create",
  "/marketplace/collections",
  "/marketplace/NFT/view/:canisterId/:tokenId",
  "/marketplace/NFT/:canisterId",
  "/marketplace/NFT",
  "/voting",
  "/voting/:canisterId",
  "/voting/project/create",
  "/voting/proposal/details/:canisterId/:id",
  "/voting/proposal/create/:id",
  "/token-claim",
  "/token-claim/transactions/:id",
  "/token-claim/create"
];

export default function MainRoutes() {
  const location = useLocation();

  const allPath = Object.keys(routeConfigs);

  return (
    <Route path={allPath}>
      <Layout>
        <Switch location={location} key={location.pathname}>
          {allPath.map((pathName) => {
            const component = maintenancePages.includes(pathName) ? Maintenance : routeConfigs[pathName];

            // @ts-ignore TODO:FIX
            return <Route key={pathName} exact path={pathName} component={component} />;
          })}
          {/* @ts-ignore TODO:FIX */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Layout>
    </Route>
  );
}
