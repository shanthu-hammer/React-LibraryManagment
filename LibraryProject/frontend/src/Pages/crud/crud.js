import React from "react";
 // Fetch data from API
 export  const fetchData = async () => {
  try {
    const response = await fetch('https://example.com/api/data');
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  } catch (error) {
    console.log('Error:', error);
    setIsLoading(false);
  }
};

// Post Method
export const createData = async () => {
  try {
    const response = await fetch('https://example.com/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'New Data' }),
    });
    const createdData = await response.json();
    setData([...data, createdData]);
  } catch (error) {
    console.log('Error:', error);
  }
};

// Update data by id
export const updateData = async (id) => {
  try {
    const response = await fetch(`https://example.com/api/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Updated Data' }),
    });
    const updatedData = await response.json();
    const updatedDataList = data.map((item) =>
      item.id === id ? updatedData : item
    );
    setData(updatedDataList);
  } catch (error) {
    console.log('Error:', error);
  }
};

//Delete By ID 
export const deleteData = async (id) => {
  try {
    await fetch(`https://example.com/api/data/${id}`, {
      method: 'DELETE',
    });
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  } catch (error) {
    console.log('Error:', error);
  }
};