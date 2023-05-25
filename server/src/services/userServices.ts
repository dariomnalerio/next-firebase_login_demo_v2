import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  uid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
}

export const createUser = async (data: User) => {
  const uid = data.uid;
  const email = data.email;

  if (!uid || !email) {
    return null;
  } else {
    const user = await prisma.user.create({
      data: {
        uid: uid,
        email: email,
      },
    });
    return user;
  }
};

export const updateUser = async (data: User) => {
  const { uid } = data;

  const user = await prisma.user.findUnique({
    where: {
      uid: uid,
    },
  });

  if (!user) {
    return null;
  }

  const updatedUser = await prisma.user.update({
    where: {
      uid: uid,
    },
    data: {
      email: data.email || user.email,
      firstName: data.firstName || user.firstName,
      lastName: data.lastName || user.lastName,
      age: data.age ? parseInt(data.age) : user.age || null,
    },
  });

  return updatedUser;
};
