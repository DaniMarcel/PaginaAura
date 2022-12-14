export const evaludateCode = async (code) => {
  const response = await fetch('https://api.projectpage.me/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ source: code }),
  });

  if (!response.ok && response.status > 299) {
    throw new Error('Something went wrong');
  }

  return await response.json();
}