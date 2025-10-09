export function ValidateResponse(response) {
    const { status, data } = response;
  
    const {
      message = '',
    } = data || {};
  
    switch (status) {
      case 200:
        return {
          success: true,
          message: message,
          data,
        };
  
      case 201:
        return {
          success: true,
          message: message,
          data,
        };
  
      case 400:
        return {
          success: false,
          message: message,
  
        };
  
      case 409:
        return {
          success: false,
          message: message,
        };
  
      case 204:
        return {
          success: true,
          message: message,
          data,
        };
  
      case 401:
        return {
          success: false,
          message: message,
        };
  
  
      default:
        return {
          success: false,
          message: "Unexpected error",
        };
    }
  }
  