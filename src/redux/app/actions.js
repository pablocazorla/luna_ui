export const actName = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
}

export default {
  fetchData: () => {
		return (dispatch) => {
			dispatch({
        type: actName.FETCH_DATA
      });
		}
  }
};
