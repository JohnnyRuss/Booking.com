import { useAppDispatch } from "../../store/hook";
import { getHomePage } from "../../store/reducers/homePageReducer";

export default function useHomePageQuery() {
  const dispatch = useAppDispatch();

  function getHomePageQuery() {
    dispatch(getHomePage());
  }

  return { getHomePageQuery };
}
