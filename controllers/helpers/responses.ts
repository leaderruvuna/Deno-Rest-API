const httpResponse: any = (response: any, status: Number, data: any) => {
	return (response.body = {
		status,
		data
	});
};

export default httpResponse;
