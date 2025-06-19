import { ofType } from "redux-observable";
import { FETCH_USER } from "../reducers/UserSlice";
import { fetchUserError, fetchUserSuccess } from "../reducers/UserSlice";
import { catchError, mergeMap, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const UserEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_USER),
    mergeMap(() => {
      return ajax.getJSON(import.meta.env.VITE_API_USER_URL).pipe(
        map((response) => fetchUserSuccess(response.users)),
        catchError((error) => of(fetchUserError(error.message)))
      );
    })
  );
};

export default UserEpic;