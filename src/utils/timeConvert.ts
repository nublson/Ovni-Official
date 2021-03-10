export const secondsToHMS = (time: number) => {
  const timeConverted = new Date(time * 1000).toISOString().substr(11, 8);

  return timeConverted;
};
