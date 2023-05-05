import axios from 'axios';
import { API_URL, SECRET } from "../environment/environment";

export const getStudent = (id) => {
    let url = `http://${API_URL}/thirdparty/student/${id}`;

    return axios ({
        method: 'get',
        url,
    }).then (response => {
        return response;
    }).catch (err => {
        return err;
    });
}

export const swap = (data) => {
    let url = `http://${API_URL}/thirdparty/swap`;
    const params = { data: data };
    
    return axios
          .post(url, params)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return err;
          });

} 