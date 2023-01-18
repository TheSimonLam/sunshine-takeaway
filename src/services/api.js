export const getOpeningTimes = async () => {
  const response = await fetch(
    `https://s3.amazonaws.com/sunshinetakeaway.co.uk/opening-times.json`
  );
  const jsonRes = await response.json();
  return jsonRes;
};
