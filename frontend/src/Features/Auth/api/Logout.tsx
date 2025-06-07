// Logout function
export const Logout = async () => {
  localStorage.removeItem("name");
  localStorage.removeItem("token");
};
