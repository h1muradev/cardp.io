export interface AuthUser {
  restaurantName: string;
  email: string;
  password: string;
  slug: string;
}

export interface AuthSession {
  email: string;
  restaurantName: string;
  slug: string;
  token: string;
}

const USERS_KEY = 'cardapio:users';
const SESSION_KEY = 'cardapio:session';

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const getUsers = (): AuthUser[] => {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as AuthUser[];
  } catch {
    return [];
  }
};

const saveUsers = (users: AuthUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = (payload: { restaurantName: string; email: string; password: string }) => {
  const users = getUsers();
  const normalizedEmail = payload.email.trim().toLowerCase();

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Já existe uma conta com este e-mail.');
  }

  const user: AuthUser = {
    restaurantName: payload.restaurantName.trim(),
    email: normalizedEmail,
    password: payload.password,
    slug: slugify(payload.restaurantName) || 'restaurante'
  };

  saveUsers([...users, user]);

  return createSession(user);
};

const createSession = (user: AuthUser): AuthSession => {
  const session: AuthSession = {
    email: user.email,
    restaurantName: user.restaurantName,
    slug: user.slug,
    token: crypto.randomUUID()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
};

export const loginUser = (email: string, password: string) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find((item) => item.email === normalizedEmail && item.password === password);

  if (!user) {
    throw new Error('E-mail ou senha inválidos.');
  }

  return createSession(user);
};

export const getSession = (): AuthSession | null => {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
};

export const isAuthenticated = () => Boolean(getSession());

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};
