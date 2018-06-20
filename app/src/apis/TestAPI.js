import BaseAPI from "./BaseAPI";
//import mime from "mime-types";
export default class TestAPI extends BaseAPI {
	testUploadFile(file, mimeType=".png") {
        // TODO: custom right url
        //for endpoint: http://yourapi.com/v1/api/upload_file
        //mimeType = mimeType || mime.lookup(file.name);
		return this.connect("api/upload_file")
			.addHeader("Content-Type", mimeType)
			.setBody(file)
			.put();
	}

	/**
	 */
	testGet({param1, param2, param3}) {
        //for endpoint: http://yourapi.com/v1/api/get_data
		return this.connect("api/get_data")
			.addParam("param_name1", param1)
			.addParam("param_name2", param2)
			.addParam("param_name3", param3)
			.get();
	}

	testPost({param1, param2}) {
        //for endpoint: http://yourapi.com/v1/api/post_data
		return this.connect("api/post_data")
			.addBody("param1", param1)
			.addBody("param2", param2)
			.post();
	}
}
