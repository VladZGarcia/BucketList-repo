export function showFieldError(fieldId: string, message: string) {
  const errorElement = document.getElementById(`${fieldId}-error-message`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

export function hideFieldError(fieldId: string) {
  const errorElement = document.getElementById(`${fieldId}-error-message`);
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

export function showToast(message: string, type: 'success' | 'error' = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 10000);
}