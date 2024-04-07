"use server";
export const post = async (
  author: string,
  title: string,
  body: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://blog-assigment-api.vercel.app/api/publications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: author,
          title: title,
          body: body,
        }),
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error de red", error);
    return false;
  }
};

export const fectUser = async (id: string) => {
  const res = await fetch(
    `https://blog-assigment-api.vercel.app/api/users?id=${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export const postUser = async (
  name: string,
  id: string,
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://blog-assigment-api.vercel.app/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          name: name,
          password: password,
          username: username,
        }),
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error de red", error);
    return false;
  }
};
