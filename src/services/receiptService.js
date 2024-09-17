import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000/api';

export const fetchNewReceiptNumber = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-new-receipt-number/`);
        return response.data.new_receipt_number;
    } catch (error) {
        console.error("Error fetching new receipt number:", error);
        throw error;
    }
};