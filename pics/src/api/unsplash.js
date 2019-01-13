import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 32452f6255b4594cf8d3874acb14a04e5e32410936fb570d6a3355a37557316a"
	}
});
