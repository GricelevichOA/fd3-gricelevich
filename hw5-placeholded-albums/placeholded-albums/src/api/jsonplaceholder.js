const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching users", e);
  }
}

export async function getUser(userId) {
  try {
    const res = await fetch(`${BASE_URL}/users/${userId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching user", e);
  }
}
export async function getUserAlbums(userId) {
  try {
    const res = await fetch(`${BASE_URL}/albums?userId=${userId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching user albums", e);
  }
}

export async function getAlbums() {
  try {
    const res = await fetch(`${BASE_URL}/albums`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching albums", e);
  }
}

export async function getAlbum(albumId) {
  try {
    const res = await fetch(`${BASE_URL}/albums/${albumId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching album", e);
  }
}

export async function getAlbumPhotos(albumId) {
  try {
    const res = await fetch(`${BASE_URL}/photos?albumId=${albumId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching album photos", e);
  }
}

export async function getPhotos() {
  try {
    const res = await fetch(`${BASE_URL}/photos`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.error("Error while fetching albums", e);
  }
}
