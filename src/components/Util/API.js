import axios from "axios";

export default axios.create({
  baseURL: "https://munaproverb.herokuapp.com/api/proverbs/" ,
//   responseType: "json"
});