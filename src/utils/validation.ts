export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  district: string;
  serviceType: string;
  estimatedArea?: string;
  notes?: string;
}

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  district?: string;
  serviceType?: string;
}

/**
 * Validates a Saudi phone number (e.g. 05XXXXXXXX, 5XXXXXXXX, +9665XXXXXXXX, 009665XXXXXXXX)
 */
export function isValidSaudiPhone(phone: string): boolean {
  if (!phone) return false;
  // Clean whitespace and dashes
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const saudiRegex = /^(?:(?:\+|00)966|0)?5[0-9]{8}$/;
  return saudiRegex.test(cleaned);
}

export function formatSaudiPhoneForCall(phone: string): string {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  if (cleaned.startsWith('05')) {
    return '+966' + cleaned.slice(1);
  }
  if (cleaned.startsWith('5')) {
    return '+966' + cleaned;
  }
  return cleaned;
}

export function validateInquiryForm(data: InquiryFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'يرجى كتابة الاسم الكريم (3 أحرف على الأقل)';
  }

  if (!data.phoneNumber || !isValidSaudiPhone(data.phoneNumber)) {
    errors.phoneNumber = 'يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05';
  }

  if (!data.district || data.district.trim().length < 2) {
    errors.district = 'يرجى اختيار أو كتابة الحي بالرياض';
  }

  if (!data.serviceType) {
    errors.serviceType = 'يرجى تحديد نوع العمل المطلوب';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
