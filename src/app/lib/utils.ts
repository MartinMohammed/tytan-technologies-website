// Helper function to format the date
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Helper function to return a copy of an object without specific keys
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  // Create a shallow copy of the object
  const newObj = { ...obj };

  // Remove the keys specified in the 'keys' array
  keys.forEach((key) => {
    delete newObj[key];
  });

  // Return the new object without the omitted keys
  return newObj;
}
