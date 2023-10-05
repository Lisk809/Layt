const { createAxios } = require("../utils");
exports.Bot = class Bot {
  constructor(url) {
    this.request = createAxios(url);
  }
  async _request_api(api, params, callback) {
    const { status, statusText, data } = await this.request.post(
      api,
      params || {},
    );
    return [{ status, statusText }, data];
    if (callback) callback();
  }
  async getLoginInfo() {
    return await this.request.post("get_login_info");
  }
  async setProfile(profile) {
    return await this._request_api("set_qq_profile", profile);
  }
  async _getModelShow(model) {
    return await this._request_api("_get_model_show", { model: model });
  }
  async _setModelShow(model, model_show) {
    return await this._request_api("_set_model_show", {
      model: model,
      model_show: model_show,
    });
  }
  async getOnlineClients(no_cache) {
    return await this._request_api("_set_model_show", {
      no_cache: no_cache,
    });
  }
  async getStrangerInfo(user_id, no_cache) {
    return await this._request_api("get_stranger_info", {
      user_id: user_id,
      no_cache: no_cache,
    });
  }
  async getFriendList() {
    return await this._request_api("get_friend_list");
  }
};
