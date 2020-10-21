import jsonplaceholder from "../apis/jsonplaceholder";
export const fetchPost = () => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get("/post");
        dispatch({ type: "FETCH_POST", payload: response });
    };
};
