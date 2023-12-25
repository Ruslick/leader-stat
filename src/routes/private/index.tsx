import { LogoutButton } from "../../components/Auth/LogoutButton/LogoutButton";
import { PrivateRoute } from "../../components/Auth/PrivateRoute/PrivateRoute";
import { HackatonPage } from "../../pages/Hackaton/Hackaton";
import { Paths } from "../../shared/constants/paths";

export const privateRoutes = {
  element: <PrivateRoute />,
  children: [
    {
      path: `${Paths.Hackatons}/:id`,
      element: <HackatonPage />,
    },

    {
      path: Paths.Market,
      element: <div>Market</div>,
    },
    {
      path: Paths.Messages,
      element: <div>Messages</div>,
    },
    {
      path: Paths.Profile,
      element: (
        <div>
          <LogoutButton />
        </div>
      ),
    },
    {
      path: Paths.News,
      element: <div>News</div>,
    },
  ],
};
