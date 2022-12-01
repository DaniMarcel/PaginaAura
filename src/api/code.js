export const evaludateCode = async (code) => {
  const response = await fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ source: code }),
  });

  if (!response.ok && response.status > 299) {
    console.log('Error');
    throw new Error('Something went wrong');
  }

  return await response.json();
}