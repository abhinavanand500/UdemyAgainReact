import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";
export const fetchPost = () => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get("/posts");
        dispatch({ type: "FETCH_POST", payload: response.data });
    };
};

// export const fetchUser = (id) => async (dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// };
// export const fetchUser = (id) => async (dispatch) => {
//     _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// });

// export const fetchUser = function (id) {
//     return _.memoize(async (dispatch) => {
//         const response = await jsonplaceholder.get(`/users/${id}`);
//         dispatch({ type: "FETCH_USER", payload: response.data });
//     });
// };

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};
