// dataFetcher.js

const authorsTableData = async () => {
  try {
    const response = await fetch("http://192.168.0.6:1880/stafflist");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default authorsTableData;
