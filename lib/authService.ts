// lib/authService.ts

export const loginUser = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const res = await fetch("https://meetio.jazyen.com/login", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Login failed");
  }

  return res.json(); // Expected: { token, userId, role }
};
