export const getTimeDifference = (dateTimeString) => {
  const now = new Date();
  const createdDate = new Date(dateTimeString);
  const timeDifference = Math.floor((now - createdDate) / (60 * 1000)); // 분 단위
  const MINUTE = 1;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  if (timeDifference < MINUTE + 1) {
    return "1 minute ago";
  }
  if (timeDifference < HOUR) {
    return `${timeDifference} minutes ago`;
  }
  if (timeDifference < DAY) {
    const hours = Math.floor(timeDifference / HOUR);
    return `${hours} hours ago`;
  }
  if (timeDifference < MONTH) {
    const days = Math.floor(timeDifference / DAY);
    return `${days} days ago`;
  }
  if (timeDifference < YEAR) {
    const months = Math.floor(timeDifference / MONTH);
    return `${months} months ago`;
  }
  const years = Math.floor(timeDifference / YEAR);
  return `${years} years ago`;
};

export function getCreateDay(createAt) {
  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
}