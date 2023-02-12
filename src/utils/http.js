const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const request = {
  invoke(args) {
    uni.showLoading({ title: "加载中" });
    if (!args.url.startsWith("http")) {
      args.url = baseURL + args.url;
    }
    args.header = {
      ...args.header, // 保留原本的 header
      "source-client": "miniapp", // 添加小程序端调用标识
    };
  },
  complete(res) {
    uni.hideLoading();
  },
};
uni.addInterceptor("request", request);
uni.addInterceptor("uploadFile", request);

export default (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail(err) {
        reject(res);
      },
    });
  });
};