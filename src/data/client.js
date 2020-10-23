export default function client() {
  return localStorage.client ? JSON.parse(localStorage.client) : null;
}
