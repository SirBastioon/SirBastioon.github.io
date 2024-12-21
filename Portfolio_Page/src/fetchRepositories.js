export async function fetchRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
}