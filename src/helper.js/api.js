import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// ──────────────────────────────────────────────
// Helper: Get auth headers with token
// ──────────────────────────────────────────────
// function getAuthHeaders() {
//   return {
//     headers: {
//       'ngrok-skip-browser-warning': 'true',
//     },
//   };
// }

// ========================================================
//    LOGIN SECTION
// ========================================================

async function loginAPI(cred) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, cred);
    return response.data;
  } catch (err) {
    alert(err);
  }
}

async function forgetPasswordAPI(email) {
  try {
    const response = await axios.post(
      `${BASE_URL}/forgot-Password?email=${email}`
    );
    return response.data;
  } catch (err) {
    alert(err);
  }
}

async function fetchHomePageAPI() {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${BASE_URL}/emp-homepagelist`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchProfileAPI() {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchAttendanceWMAPI(wm) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${BASE_URL}/emp-attendance-WM`, {
      params: {
        wm: wm,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchAttendanceByMonthAPI(filter) {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    const response = await axios.get(
      `${BASE_URL}/get-Monthly-Summary?user_id=${user.id}&month=${filter.month}&year=${filter.year}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function storeMarkAttendanceAPI(data) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${BASE_URL}/mark-attendance`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchPermisionAPI() {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${BASE_URL}/permission`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function applyPermissionAPI(data) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${BASE_URL}/apply-permission`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchLeaveAPI() {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${BASE_URL}/list-of-leave`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function applyLeaveAPI(data) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${BASE_URL}/apply-leave `, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchRaiseTicketAPI(filter) {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    const response = await axios.get(
      `${BASE_URL}/tickets?user_id=${user.id}&month=${filter.month}&year=${filter.year}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function raiseTicketAPI(data) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${BASE_URL}/ticket/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchOnDayAttendanceAPI(date) {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    const response = await axios.get(
      `${BASE_URL}/homepage-id-date?user_id=${user.id}&date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchHolidaysAPI(filter) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(
      `${BASE_URL}/holiday/list?month=${filter.month}&year=${filter.year}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

async function fetchLateDaysAPI(filter) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(
      `${BASE_URL}/late-list?month=${filter.month}&year=${filter.year}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
}

export {
  loginAPI,
  forgetPasswordAPI,
  fetchHomePageAPI,
  fetchProfileAPI,
  fetchAttendanceWMAPI,
  fetchAttendanceByMonthAPI,
  storeMarkAttendanceAPI,
  fetchPermisionAPI,
  applyPermissionAPI,
  fetchLeaveAPI,
  applyLeaveAPI,
  fetchRaiseTicketAPI,
  raiseTicketAPI,
  fetchOnDayAttendanceAPI,
  fetchHolidaysAPI,
  fetchLateDaysAPI,
};
